import { Icon } from '~/components/icon';
import { useTheme } from '~/components/theme-provider';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useScrollToHash, useWindowSize } from '~/hooks';
import { Link as RouterLink, useLocation } from '@remix-run/react';
import { useEffect, useRef, useState } from 'react';
import { cssProps, media, msToNum, numToMs } from '~/utils/style';
import { NavToggle } from './nav-toggle';
import { ThemeToggle } from './theme-toggle';
import { navLinks, socialLinks } from './nav-data';
import styles from './navbar.module.css';

export const Navbar = () => {
  const [current, setCurrent] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState();
  const { theme } = useTheme();
  const location = useLocation();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const navToggleRef = useRef();
  const mobileNavRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const scrollToHash = useScrollToHash();

  useEffect(() => {
    // Prevent ssr mismatch by storing this in state
    setCurrent(`${location.pathname}${location.hash}`);
  }, [location]);

  // Handle smooth scroll nav items
  useEffect(() => {
    if (!target || location.pathname !== '/') return;
    setCurrent(`${location.pathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [location.pathname, scrollToHash, target]);

  // Handle swapping the theme when intersecting with inverse themed elements
  useEffect(() => {
    const navItems = document.querySelectorAll('[data-navbar-item]');
    const inverseTheme = theme === 'dark' ? 'light' : 'dark';
    const { innerHeight } = window;

    let inverseMeasurements = [];
    let navItemMeasurements = [];

    const isOverlap = (rect1, rect2, scrollY) => {
      return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
    };

    const resetNavTheme = () => {
      for (const measurement of navItemMeasurements) {
        measurement.element.dataset.theme = '';
      }
    };

    const handleInversion = () => {
      const invertedElements = document.querySelectorAll(
        `[data-theme='${inverseTheme}'][data-invert]`
      );

      if (!invertedElements) return;

      inverseMeasurements = Array.from(invertedElements).map(item => ({
        element: item,
        top: item.offsetTop,
        bottom: item.offsetTop + item.offsetHeight,
      }));

      const { scrollY } = window;

      resetNavTheme();

      for (const inverseMeasurement of inverseMeasurements) {
        if (
          inverseMeasurement.top - scrollY > innerHeight ||
          inverseMeasurement.bottom - scrollY < 0
        ) {
          continue;
        }

        for (const measurement of navItemMeasurements) {
          if (isOverlap(inverseMeasurement, measurement, scrollY)) {
            measurement.element.dataset.theme = inverseTheme;
          } else {
            measurement.element.dataset.theme = '';
          }
        }
      }
    };

    // Currently only the light theme has dark full-width elements
    if (theme === 'light') {
      navItemMeasurements = Array.from(navItems).map(item => {
        const rect = item.getBoundingClientRect();

        return {
          element: item,
          top: rect.top,
          bottom: rect.bottom,
        };
      });

      document.addEventListener('scroll', handleInversion);
      handleInversion();
    }

    return () => {
      document.removeEventListener('scroll', handleInversion);
      resetNavTheme();
    };
  }, [theme, windowSize, location.key]);

  // Check if a nav item should be active
  const getCurrent = (url = '') => {
    const nonTrailing = current?.endsWith('/') ? current?.slice(0, -1) : current;

    if (url === nonTrailing) {
      return 'page';
    }

    return '';
  };

  // Store the current hash to scroll to
  const handleNavItemClick = event => {
    const hash = event.currentTarget.href.split('#')[1];
    setTarget(null);

    if (hash && location.pathname === '/') {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };

  const handleMobileNavClick = event => {
    handleNavItemClick(event);
    if (menuOpen) setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeydown = event => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    const handlePointer = event => {
      const navElement = mobileNavRef.current;
      const isInsideNav = navElement?.contains(event.target);

      if (navElement && event.target === navElement) {
        setMenuOpen(false);
        return;
      }

      if (isInsideNav) return;
      if (navToggleRef.current?.contains(event.target)) return;
      setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('pointerdown', handlePointer);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('pointerdown', handlePointer);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen || !isMobile) return;

    const firstItem = mobileNavRef.current?.querySelector('a, button');
    firstItem?.focus();
  }, [menuOpen, isMobile]);

  const navLabel = menuOpen ? 'Close menu' : 'Open menu';

  return (
    <header className={styles.navbar} ref={headerRef}>
      <NavToggle
        onClick={() => setMenuOpen(!menuOpen)}
        menuOpen={menuOpen}
        label={navLabel}
        ref={navToggleRef}
      />
      <nav className={styles.nav} aria-label="Primary">
        <div className={styles.navList}>
          {navLinks.map(({ label, pathname, external }) =>
            external ? (
              <a
                key={label}
                className={styles.navLink}
                data-navbar-item
                href={pathname}
                target="_blank"
                rel="noreferrer noopener"
              >
                {label}
              </a>
            ) : (
              <RouterLink
                unstable_viewTransition
                prefetch="intent"
                to={pathname}
                key={label}
                data-navbar-item
                className={styles.navLink}
                aria-current={getCurrent(pathname)}
                onClick={handleNavItemClick}
              >
                {label}
              </RouterLink>
            )
          )}
        </div>
        <div className={styles.navFooter}>
          <NavbarIcons desktop />
          {!isMobile && <ThemeToggle data-navbar-item />}
        </div>
      </nav>
      <Transition unmount in={menuOpen} timeout={msToNum(tokens.base.durationL)}>
        {({ visible, nodeRef }) => (
          <nav
            className={styles.mobileNav}
            data-visible={visible}
            ref={node => {
              mobileNavRef.current = node;
              nodeRef.current = node;
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className={styles.mobileNavContent} data-visible={visible}>
              {navLinks.map(({ label, pathname, external }, index) => {
                const linkProps = {
                  key: label,
                  className: styles.mobileNavLink,
                  'data-visible': visible,
                  onClick: () => setMenuOpen(false),
                  style: cssProps({
                    transitionDelay: numToMs(
                      Number(msToNum(tokens.base.durationS)) + index * 50
                    ),
                  }),
                };

                return external ? (
                  <a href={pathname} target="_blank" rel="noreferrer noopener" {...linkProps}>
                    {label}
                  </a>
                ) : (
                  <RouterLink
                    unstable_viewTransition
                    prefetch="intent"
                    to={pathname}
                    aria-current={getCurrent(pathname)}
                    onClick={handleMobileNavClick}
                    {...linkProps}
                  >
                    {label}
                  </RouterLink>
                );
              })}
              <div className={styles.mobileActions}>
                <NavbarIcons />
                <ThemeToggle isMobile />
              </div>
            </div>
          </nav>
        )}
      </Transition>
    </header>
  );
};

const NavbarIcons = ({ desktop }) => {
  if (!socialLinks.length) return null;

  return (
    <div className={styles.navIcons}>
      {socialLinks.map(({ label, url, icon }) => (
        <a
          key={label}
          data-navbar-item={desktop || undefined}
          className={styles.navIconLink}
          aria-label={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className={styles.navIcon} icon={icon} />
        </a>
      ))}
    </div>
  );
};
