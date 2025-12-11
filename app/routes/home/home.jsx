import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

const portfolioAsset = fileName => `/assets/portfolio/${fileName}`;

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: config.meta?.title,
    prefix: null,
    description: config.meta?.description,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <div id="portfolio">
        <ProjectSummary
          id="equitable-journeys"
          sectionRef={projectOne}
          visible={visibleSections.includes(projectOne.current)}
          index={1}
          title="Equitable Journeys"
          description="Equitable Journeys is a not-for-profit platform that helps learners choose the right qualifications, funding routes, and study options across the UK and Europe. We work with councils, youth projects, charities, and employers to map real-world pathways using relatable stories, real examples, and pre-recorded coaching, with the goal of delivering guidance that matches the quality available to those with private advisers."
          buttonText="View platform roadmap"
          buttonLink="/#equitable-journeys"
          model={{
            type: 'image',
            alt: 'Equitable Journeys logo and interface header',
            image: {
              src: portfolioAsset('ej-header-logo-1024x256.png'),
              srcSet: `${portfolioAsset('ej-header-logo-1024x256.png')} 1024w, ${portfolioAsset('ej-header-logo-1024x256.png')} 2048w`,
              placeholder: portfolioAsset('ej-header-logo-1024x256.png'),
              width: 1024,
              height: 256,
            },
          }}
        />
        <ProjectSummary
          id="sentinel-x"
          alternate
          sectionRef={projectTwo}
          visible={visibleSections.includes(projectTwo.current)}
          index={2}
          title="Hardline / Sentinel-X"
          description="Hardline is our protective-equipment brand, with Sentinel-X as its flagship modular armour platform combining ballistic protection, integrated sensors, and a HUD-ready helmet. The Sentinel-X helmet uses an ALON transparent ceramic visor, a carbon-fibre and Kevlar composite shell, and a modular side module sized for smartphone-class processors and batteries. Our long-term goal is a family of lightweight helmets and body armour for defence, VIP protection, critical-infrastructure security, and first responders."
          buttonText="Explore Sentinel-X concept"
          buttonLink="/#sentinel-x"
          model={{
            type: 'image',
            alt: 'Sentinel-X ballistic helmet concept with ALON visor and modular side module',
            image: {
              src: portfolioAsset('hardline-sentinel-x-helmet.png'),
              srcSet: `${portfolioAsset('hardline-sentinel-x-helmet.png')} 1400w, ${portfolioAsset('hardline-sentinel-x-helmet.png')} 2400w`,
              placeholder: portfolioAsset('hardline-sentinel-x-helmet.png'),
              width: 1600,
              height: 1600,
            },
            badge: {
              src: portfolioAsset('hardline-logo.png'),
              alt: 'Hardline logo',
            },
          }}
        />
        <ProjectSummary
          id="aquacore"
          sectionRef={projectThree}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="AquaCore Technologies"
          description="AquaCore explores how water can act as both an energy storage medium and an information-rich material, from safer water-based batteries to experimental quantum water cells. Our R&D spans aqueous-electrolyte batteries, thin-film quantum water memory cells, and modular subsea turbines for low-impact generation, building IP and demonstrators that make water-centric systems a realistic alternative to conventional lithium and purely solid-state approaches."
          buttonText="View AquaCore R&D"
          buttonLink="/#aquacore"
          model={{
            type: 'gallery',
            alt: 'AquaCore subsea turbines and research graphics',
            primary: {
              src: portfolioAsset('aquacore-underwater-turbines.png'),
              srcSet: `${portfolioAsset('aquacore-underwater-turbines.png')} 1600w, ${portfolioAsset('aquacore-underwater-turbines.png')} 2400w`,
              placeholder: portfolioAsset('aquacore-underwater-turbines.png'),
              width: 2000,
              height: 1125,
              alt: 'Underwater turbine array concept for tidal or current-based power',
            },
            gallery: [
              {
                src: portfolioAsset('aquacore-logo-molecule.png'),
                srcSet: `${portfolioAsset('aquacore-logo-molecule.png')} 800w, ${portfolioAsset('aquacore-logo-molecule.png')} 1600w`,
                placeholder: portfolioAsset('aquacore-logo-molecule.png'),
                width: 1200,
                height: 1200,
                alt: 'AquaCore molecule brand lockup',
              },
              {
                src: portfolioAsset('aquacore-quantum-water-cell.png'),
                srcSet: `${portfolioAsset('aquacore-quantum-water-cell.png')} 800w, ${portfolioAsset('aquacore-quantum-water-cell.png')} 1600w`,
                placeholder: portfolioAsset('aquacore-quantum-water-cell.png'),
                width: 1200,
                height: 1200,
                alt: 'Diagram of a quantum water memory cell with encapsulated water layer',
              },
              {
                src: portfolioAsset('aquacore-water-battery-chart.png'),
                srcSet: `${portfolioAsset('aquacore-water-battery-chart.png')} 800w, ${portfolioAsset('aquacore-water-battery-chart.png')} 1600w`,
                placeholder: portfolioAsset('aquacore-water-battery-chart.png'),
                width: 1200,
                height: 1200,
                alt: 'Comparison chart of water-based battery versus lithium-ion and solid-state batteries',
              },
              {
                src: portfolioAsset('aquacore-logo-droplet.png'),
                srcSet: `${portfolioAsset('aquacore-logo-droplet.png')} 800w, ${portfolioAsset('aquacore-logo-droplet.png')} 1600w`,
                placeholder: portfolioAsset('aquacore-logo-droplet.png'),
                width: 1200,
                height: 1200,
                alt: 'AquaCore droplet logo',
              },
            ],
          }}
        />
        <ProjectSummary
          id="cpms-consultancy"
          alternate
          sectionRef={projectFour}
          visible={visibleSections.includes(projectFour.current)}
          index={4}
          title="Quoralinex Consultancy & CPMS"
          description="Quoralinex Consultancy provides specialist cost, commercial, and project management for complex capital projects, powered by our CPMS contract and project management suite. We support hyperscale data centres, pharmaceutical plants, giga-factories, and critical civil infrastructure with contract administration, EDMS, and structured change control that export to PDF, Word, and Excel and import client baselines. The roadmap includes deep support for NEC, FIDIC, and JCT, automated capture of amendments and clause-linked correspondence, plus in-app chat and AI assistants for contract-aware guidance."
          buttonText="Learn about CPMS"
          buttonLink="/cpms"
          secondaryButtonText="Consultancy services overview"
          secondaryButtonLink="/consultancy"
          model={{
            type: 'gallery',
            alt: 'CPMS logo representing Quoralinex contract and project management suite',
            primary: {
              src: portfolioAsset('cpms-logo-horizontal.svg'),
              srcSet: `${portfolioAsset('cpms-logo-horizontal.svg')} 1200w, ${portfolioAsset('cpms-logo-horizontal.svg')} 1800w`,
              placeholder: portfolioAsset('cpms-logo-horizontal.svg'),
              width: 1600,
              height: 480,
              alt: 'CPMS logo representing Quoralinex contract and project management suite',
            },
            gallery: [
              {
                src: portfolioAsset('document_cover_logo_lockup.png'),
                srcSet: `${portfolioAsset('document_cover_logo_lockup.png')} 1200w, ${portfolioAsset('document_cover_logo_lockup.png')} 1800w`,
                placeholder: portfolioAsset('document_cover_logo_lockup.png'),
                width: 1600,
                height: 900,
                alt: 'Quoralinex group lockup',
              },
            ],
          }}
        />
      </div>
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="about"
      />
      <Footer />
    </div>
  );
};
