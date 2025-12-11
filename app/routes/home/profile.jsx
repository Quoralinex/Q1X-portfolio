import { Button } from '~/components/button';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import { media } from '~/utils/style';
import q1xLockup from '~/assets/document_cover_logo_lockup.png';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="About Quoralinex / Q1X" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Quoralinex (Q1X) is an independent group working at the intersection of infrastructure,
      protective systems, and applied research.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      We design and test concepts that sit slightly ahead of the market: modular armour, water-based
      energy storage, and contract platforms built for multi-billion-euro data-centre and
      infrastructure programmes. Some products are already in pilot with partners, others are
      early-stage R&D that will grow into standalone ventures or licensable IP.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.textColumn}>
              <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
                About Quoralinex / Q1X
              </Heading>
              <Text className={styles.description} data-visible={visible} size="l" as="p">
                Quoralinex (Q1X) is a small, independent group focused on the intersection of
                infrastructure, protective systems, and applied research. We build and test concepts
                that sit slightly ahead of the market: modular armour, water-based energy storage,
                and contract platforms designed for multi-billion-euro data-centre and
                infrastructure programmes.
              </Text>
              <Text className={styles.description} data-visible={visible} size="l" as="p">
                The portfolio on this page is a snapshot of ongoing work. Some products are already
                being piloted with partners, others are early-stage R&D that will mature into
                standalone ventures or licensable IP.
              </Text>
              <Button
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Contact us
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Q1X
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  className={styles.image}
                  placeholder={q1xLockup}
                  srcSet={`${q1xLockup} 800w, ${q1xLockup} 1600w`}
                  width={1600}
                  height={900}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Quoralinex Q1X group logo"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
