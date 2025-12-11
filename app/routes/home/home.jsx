import hardlineHelmet from '~/assets/hardline-sentinel-x-helmet.png';
import hardlineLogo from '~/assets/hardline-logo.png';
import ejHeader from '~/assets/ej-header-logo-1024x256.png';
import aquacoreDroplet from '~/assets/aquacore-logo-droplet.png';
import aquacoreMolecule from '~/assets/aquacore-logo-molecule.png';
import aquacoreCell from '~/assets/aquacore-quantum-water-cell.png';
import aquacoreTurbines from '~/assets/aquacore-underwater-turbines.png';
import aquacoreBatteryChart from '~/assets/aquacore-water-battery-chart.png';
import cpmsLogo from '~/assets/cpms-logo-horizontal.svg';
import q1xLockup from '~/assets/document_cover_logo_lockup.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

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
    title: `${config.name} Portfolio`,
    description:
      'Quoralinex (Q1X) Group portfolio — next-generation infrastructure, protective systems, AquaCore R&D, and CPMS consultancy.',
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
      <ProjectSummary
        id="equitable-journeys"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Equitable Journeys"
        description="Equitable Journeys is a not-for-profit decision-support platform that helps learners choose the right qualifications, whether that is university, vocational training, or professional exams. The app works with councils, youth projects, charities, and employers to map real-world pathways using relatable stories, real examples, and pre-recorded coaching. Long-term, Equitable Journeys will become a pan-European guidance layer, modelling funding routes, visa options, and local support so that people from low-income backgrounds can access the same quality of information as those with private advisers."
        buttonText="View platform roadmap"
        buttonLink="/#equitable-journeys"
        model={{
          type: 'image',
          alt: 'Equitable Journeys header wordmark',
          image: {
            srcSet: `${ejHeader} 1024w, ${ejHeader} 2048w`,
            placeholder: ejHeader,
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
        description="Hardline is our protective-equipment brand, with Sentinel-X as its flagship modular armour platform. The Sentinel-X helmet combines an ALON transparent ceramic visor, a carbon-fibre and Kevlar composite shell, and a modular HUD module powered by smartphone-class sensors. The long-term goal is a family of lightweight helmets and body armour that integrate ballistic protection, situational awareness, and networked sensing. We are designing for defence, VIP protection, critical-infrastructure security, and first-responder use where weight, comfort, and data-driven decision-making matter as much as stopping power."
        buttonText="Explore Sentinel-X concept"
        buttonLink="/#sentinel-x"
        model={{
          type: 'image',
          alt: 'Sentinel-X helmet concept render',
          image: {
            srcSet: `${hardlineHelmet} 1400w, ${hardlineHelmet} 2400w`,
            placeholder: hardlineHelmet,
            width: 1600,
            height: 1600,
          },
          badge: {
            src: hardlineLogo,
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
        description="AquaCore Technologies explores how water can act as both an energy storage medium and an information-rich material. Our R&D spans three fronts: • Water-based batteries and safer grid-scale storage, inspired by emerging aqueous-electrolyte chemistries. • ‘Quantum water’ memory cells that investigate how structured water layers behave under electromagnetic fields. • Subsea and river-based generation modules, such as modular underwater turbines designed to sit unobtrusively on the seabed. The ambition is to build a portfolio of IP and demonstrators that make water-centric systems a realistic alternative to conventional lithium and purely solid-state approaches."
        buttonText="View AquaCore R&D"
        buttonLink="/#aquacore"
        model={{
          type: 'gallery',
          alt: 'AquaCore subsea turbines and research graphics',
          primary: {
            srcSet: `${aquacoreTurbines} 1600w, ${aquacoreTurbines} 2400w`,
            placeholder: aquacoreTurbines,
            width: 2000,
            height: 1125,
            alt: 'AquaCore modular underwater turbines on the ocean floor',
          },
          gallery: [
            {
              srcSet: `${aquacoreMolecule} 800w, ${aquacoreMolecule} 1600w`,
              placeholder: aquacoreMolecule,
              width: 1200,
              height: 1200,
              alt: 'AquaCore molecule brand lockup',
            },
            {
              srcSet: `${aquacoreCell} 800w, ${aquacoreCell} 1600w`,
              placeholder: aquacoreCell,
              width: 1200,
              height: 1200,
              alt: 'Quantum water cell concept diagram',
            },
            {
              srcSet: `${aquacoreBatteryChart} 800w, ${aquacoreBatteryChart} 1600w`,
              placeholder: aquacoreBatteryChart,
              width: 1200,
              height: 1200,
              alt: 'Water battery performance comparison chart',
            },
            {
              srcSet: `${aquacoreDroplet} 800w, ${aquacoreDroplet} 1600w`,
              placeholder: aquacoreDroplet,
              width: 1200,
              height: 1200,
              alt: 'AquaCore droplet logo',
            },
          ],
        }}
      />
      <ProjectSummary
        id="cpms"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Quoralinex Consultancy & CPMS"
        description="Quoralinex Consultancy provides specialist cost, commercial, and project management for complex capital projects: hyperscale data centres, pharmaceutical plants, giga-factories, and critical civil infrastructure. Our CPMS (Contract & Project Management Suite) underpins this work. CPMS combines contract administration, EDMS, and structured change control into a single environment that can export contract data to PDF, Word, and Excel, and import contract baselines from clients. The roadmap includes: • Deep contract-type support (NEC, FIDIC, JCT, and custom frameworks). • Automated capture of contract amendments and clause-linked correspondence. • In-app chat for project teams, integrated AI assistants, and contract-aware chatbots to surface obligations and risks in plain language."
        buttonText="Learn about CPMS"
        buttonLink="https://cpms.quoralinex.com"
        model={{
          type: 'gallery',
          alt: 'Quoralinex Consultancy and CPMS branding',
          primary: {
            srcSet: `${cpmsLogo} 1200w, ${cpmsLogo} 1800w`,
            placeholder: cpmsLogo,
            width: 1600,
            height: 480,
            alt: 'CPMS horizontal logo',
          },
          gallery: [
            {
              srcSet: `${q1xLockup} 1200w, ${q1xLockup} 1800w`,
              placeholder: q1xLockup,
              width: 1600,
              height: 900,
              alt: 'Quoralinex group lockup',
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
