import { Button } from '~/components/button';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section, SectionContent } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import { media } from '~/utils/style';
import styles from './project-summary.module.css';

export function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index,
  title,
  description,
  model,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  alternate,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  const indexText = index < 10 ? `0${index}` : index;

  function renderDetails(visible) {
    return (
      <div className={styles.details}>
        <span className={styles.indexNumber} aria-hidden data-visible={visible}>
          {indexText}
        </span>
        <Heading
          level={3}
          as="h2"
          className={styles.title}
          data-visible={visible}
          id={titleId}
        >
          {title}
        </Heading>
        <Text className={styles.description} data-visible={visible} as="p">
          {description}
        </Text>
        <div className={styles.buttonGroup} data-visible={visible}>
          <Button iconHoverShift href={buttonLink} iconEnd="arrow-right">
            {buttonText}
          </Button>
          {secondaryButtonText && secondaryButtonLink ? (
            <Button
              secondary
              iconHoverShift
              href={secondaryButtonLink}
              iconEnd="arrow-right"
              className={styles.secondaryButton}
            >
              {secondaryButtonText}
            </Button>
          ) : null}
        </div>
      </div>
    );
  }

  function renderPreview(visible) {
    return (
      <div className={styles.preview}>
        {model.type === 'image' && renderImageContent(visible)}
        {model.type === 'gallery' && renderGallery(visible)}
      </div>
    );
  }

  function renderImageContent(visible) {
    const { image, badge } = model;

    if (!image) return null;

    const placeholder = image.placeholder || image.src || image.srcSet?.split(' ')[0];
    const srcSet = image.srcSet || image.src;

    return (
      <div className={styles.previewImage} data-visible={visible}>
        <Image
          className={styles.portfolioCard}
          reveal
          delay={100}
          placeholder={placeholder}
          src={image.src}
          srcSet={srcSet}
          width={image.width}
          height={image.height}
          sizes={image.sizes || `(max-width: ${media.tablet}px) 100vw, 60vw`}
          alt={image.alt || model.alt}
        />
        {badge && (
          <div className={styles.brandBadge}>
            <img src={badge.src} alt={badge.alt} />
          </div>
        )}
      </div>
    );
  }

  function renderGallery(visible) {
    const { primary, gallery = [] } = model;

    if (!primary) return null;

    const placeholder = primary.placeholder || primary.src || primary.srcSet?.split(' ')[0];
    const srcSet = primary.srcSet || primary.src;

    return (
      <div className={styles.previewImage} data-visible={visible}>
        <Image
          className={styles.portfolioCard}
          reveal
          delay={100}
          placeholder={placeholder}
          src={primary.src}
          srcSet={srcSet}
          width={primary.width}
          height={primary.height}
          sizes={primary.sizes || `(max-width: ${media.tablet}px) 100vw, 60vw`}
          alt={primary.alt || model.alt}
        />
        {gallery.length > 0 && (
          <div className={styles.galleryGrid}>
            {gallery.map((item, index) => {
              const itemPlaceholder = item.placeholder || item.src || item.srcSet?.split(' ')[0];
              const itemSrcSet = item.srcSet || item.src;

              return (
                <Image
                  key={`${item.alt || 'gallery-image'}-${index}`}
                  className={styles.galleryItem}
                  reveal
                  placeholder={itemPlaceholder}
                  src={item.src}
                  srcSet={itemSrcSet}
                  width={item.width}
                  height={item.height}
                  sizes={item.sizes || `(max-width: ${media.tablet}px) 45vw, 240px`}
                  alt={item.alt || model.alt}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <Section
      className={styles.summary}
      data-alternate={alternate}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      <SectionContent>
        <div className={styles.content} data-alternate={alternate}>
          <Transition in={sectionVisible || focused}>
            {({ visible }) => (
              <>
                <div className={styles.textColumn}>{renderDetails(visible)}</div>
                <div className={styles.mediaColumn}>{renderPreview(visible)}</div>
              </>
            )}
          </Transition>
        </div>
      </SectionContent>
    </Section>
  );
}
