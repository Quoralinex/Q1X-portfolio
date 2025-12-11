import { Button } from '~/components/button';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { useTheme } from '~/components/theme-provider';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Link as RouterLink } from '@remix-run/react';
import { Suspense, lazy } from 'react';
import { useScrollToHash } from '~/hooks';
import { Suspense, lazy } from 'react';
import { cssProps } from '~/utils/style';
import config from '~/config.json';
import { useHydrated } from '~/hooks/useHydrated';
import styles from './intro.module.css';

const DisplacementSphere = lazy(() =>
  import('./displacement-sphere').then(module => ({ default: module.DisplacementSphere }))
);

export function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();
  const heroTitle = config.role || 'Building next-generation infrastructure and protective systems';

  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  return (
    <Section
      className={styles.intro}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition in key={theme} timeout={3000}>
        {({ visible, status }) => (
          <>
            {isHydrated && (
              <Suspense>
                <DisplacementSphere />
              </Suspense>
            )}
            <header className={styles.text}>
              <Heading level={0} as="h2" className={styles.title} id={titleId}>
                <VisuallyHidden className={styles.label}>
                  {`${config.name} portfolio overview`}
                </VisuallyHidden>
                <Transition in timeout={{ enter: 3000, exit: 2000 }}>
                  {({ status, nodeRef }) => (
                    <span
                      ref={nodeRef}
                      className={styles.titleText}
                      data-status={status}
                      style={cssProps({ delay: tokens.base.durationM })}
                    >
                      {heroTitle}
                    </span>
                  )}
                </Transition>
              </Heading>
              <p className={styles.description} data-visible={visible}>
                A portfolio of live products and R&D spanning protective equipment, water-based energy
                storage, data-centre consultancy, and equitable education technology.
              </p>
              <div className={styles.actions} data-visible={visible}>
                <Button href="/#portfolio" iconEnd="arrow-right" iconHoverShift>
                  View the portfolio
                </Button>
              </div>
            </header>
            <RouterLink
              to="/#portfolio"
              className={styles.scrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
            </RouterLink>
            <RouterLink
              to="/#portfolio"
              className={styles.mobileScrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
              <svg
                aria-hidden
                stroke="currentColor"
                width="43"
                height="15"
                viewBox="0 0 43 15"
              >
                <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
              </svg>
            </RouterLink>
          </>
        )}
      </Transition>
    </Section>
  );
}
