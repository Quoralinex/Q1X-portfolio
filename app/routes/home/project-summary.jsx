import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { deviceModels } from '~/components/model/device-models';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { Loader } from '~/components/loader';
import { useWindowSize } from '~/hooks';
import { Suspense, lazy, useState } from 'react';
import { cssProps, media } from '~/utils/style';
import { useHydrated } from '~/hooks/useHydrated';
import katakana from './katakana.svg';
import styles from './project-summary.module.css';

const Model = lazy(() =>
  import('~/components/model').then(module => ({ default: module.Model }))
);

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
  const isDeviceModel = model.type === 'laptop' || model.type === 'phone';
  const [modelLoaded, setModelLoaded] = useState(!isDeviceModel);
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme === 'light' ? 0.7 : 1;
  const indexText = index < 10 ? `0${index}` : index;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;

  function handleModelLoad() {
    setModelLoaded(true);
  }

  function renderKatakana(device, visible) {
    return (
      <svg
        type="project"
        data-visible={visible && modelLoaded}
        data-light={theme === 'light'}
        style={cssProps({ opacity: svgOpacity })}
        className={styles.svg}
        data-device={device}
        viewBox="0 0 751 136"
      >
        <use href={`${katakana}#katakana-project`} />
      </svg>
    );
  }

  function renderDetails(visible) {
    return (
      <div className={styles.details}>
        <div aria-hidden className={styles.index}>
          <Divider
            notchWidth="64px"
            notchHeight="8px"
            collapsed={!visible}
            collapseDelay={1000}
          />
          <span className={styles.indexNumber} data-visible={visible}>
            {indexText}
          </span>
        </div>
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
        {model.type === 'laptop' && (
          <>
            {renderKatakana('laptop', visible)}
            <div className={styles.model} data-device="laptop">
              {!modelLoaded && (
                <Loader center className={styles.loader} data-visible={visible} />
              )}
              {isHydrated && visible && (
                <Suspense>
                  <Model
                    alt={model.alt}
                    cameraPosition={{ x: 0, y: 0, z: 8 }}
                    showDelay={700}
                    onLoad={handleModelLoad}
                    show={visible}
                    models={[
                      {
                        ...deviceModels.laptop,
                        texture: {
                          ...model.textures[0],
                          sizes: laptopSizes,
                        },
                      },
                    ]}
                  />
                </Suspense>
              )}
            </div>
          </>
        )}
        {model.type === 'phone' && (
          <>
            {renderKatakana('phone', visible)}
            <div className={styles.model} data-device="phone">
              {!modelLoaded && (
                <Loader center className={styles.loader} data-visible={visible} />
              )}
              {isHydrated && visible && (
                <Suspense>
                  <Model
                    alt={model.alt}
                    cameraPosition={{ x: 0, y: 0, z: 11.5 }}
                    showDelay={300}
                    onLoad={handleModelLoad}
                    show={visible}
                    models={[
                      {
                        ...deviceModels.phone,
                        position: { x: -0.6, y: 1.1, z: 0 },
                        texture: {
                          ...model.textures[0],
                          sizes: phoneSizes,
                        },
                      },
                      {
                        ...deviceModels.phone,
                        position: { x: 0.6, y: -0.5, z: 0.3 },
                        texture: {
                          ...model.textures[1],
                          sizes: phoneSizes,
                        },
                      },
                    ]}
                  />
                </Suspense>
              )}
            </div>
          </>
        )}
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
        {renderKatakana('image', visible)}
        <Image
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
        {renderKatakana('image', visible)}
        <Image
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
      data-first={index === 1}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      <div className={styles.content}>
        <Transition in={sectionVisible || focused}>
          {({ visible }) => (
            <>
              {!alternate && !isMobile && (
                <>
                  {renderDetails(visible)}
                  {renderPreview(visible)}
                </>
              )}
              {(alternate || isMobile) && (
                <>
                  {renderPreview(visible)}
                  {renderDetails(visible)}
                </>
              )}
            </>
          )}
        </Transition>
      </div>
    </Section>
  );
}
