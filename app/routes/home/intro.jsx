import { Button } from '~/components/button';
import { Heading } from '~/components/heading';
import { Section, SectionContent } from '~/components/section';
import { useTheme } from '~/components/theme-provider';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Suspense, lazy } from 'react';
import { cssProps } from '~/utils/style';
import config from '~/config.json';
import { useHydrated } from '~/hooks/useHydrated';
import styles from './intro.module.css';

const DisplacementSphere = lazy(() =>
  import('./displacement-sphere').then(module => ({ default: module.DisplacementSphere }))
);

export function Intro({ id, sectionRef, ...rest }) {
  const { theme } = useTheme();
  const titleId = `${id}-title`;
  const isHydrated = useHydrated();
  const heroTitle = config.role || 'Building next-generation infrastructure and protective systems';

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
      <SectionContent className={styles.content}>
        <Transition in key={theme} timeout={3000}>
          {({ visible }) => (
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
            </>
          )}
        </Transition>
      </SectionContent>
    </Section>
  );
}
