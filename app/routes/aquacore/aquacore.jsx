import aquacoreArray from '~/assets/portfolio/aquacore-underwater-turbines.png';
import aquacoreCell from '~/assets/portfolio/aquacore-quantum-water-cell.png';
import aquacoreBattery from '~/assets/portfolio/aquacore-water-battery-chart.png';
import aquacoreMolecule from '~/assets/portfolio/aquacore-logo-molecule.png';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { List, ListItem } from '~/components/list';
import { Image } from '~/components/image';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './aquacore.module.css';

const title = 'AquaCore Technologies';
const description = 'Water-centric energy storage and information-rich materials research.';

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Aquacore = () => {
  return (
    <>
      <ProjectContainer className={styles.aquacore}>
        <ProjectHeader
          title={title}
          description="Exploring aqueous batteries, quantum water memory cells, and subsea turbines that make water-centric systems viable."
        />

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${aquacoreArray} 1600w, ${aquacoreArray} 2400w`}
              width={2000}
              height={1125}
              placeholder={aquacoreArray}
              alt="Underwater turbine array concept for tidal power"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 960px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Research strands</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>Aqueous-electrolyte batteries designed for safer energy storage.</ListItem>
                  <ListItem>Thin-film quantum water memory cells for experimental computing concepts.</ListItem>
                  <ListItem>Low-impact subsea turbines intended for modular deployment.</ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns>
            <Image
              className={styles.galleryImage}
              srcSet={`${aquacoreMolecule} 800w, ${aquacoreMolecule} 1600w`}
              width={1200}
              height={1200}
              placeholder={aquacoreMolecule}
              alt="AquaCore molecule lockup"
              sizes={`(max-width: ${media.mobile}px) 80vw, 360px`}
            />
            <Image
              className={styles.galleryImage}
              srcSet={`${aquacoreCell} 800w, ${aquacoreCell} 1600w`}
              width={1200}
              height={1200}
              placeholder={aquacoreCell}
              alt="Diagram of a quantum water memory cell"
              sizes={`(max-width: ${media.mobile}px) 80vw, 360px`}
            />
            <Image
              className={styles.galleryImage}
              srcSet={`${aquacoreBattery} 800w, ${aquacoreBattery} 1600w`}
              width={1200}
              height={1200}
              placeholder={aquacoreBattery}
              alt="Comparison of water-based battery performance"
              sizes={`(max-width: ${media.mobile}px) 80vw, 360px`}
            />
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Partnerships</ProjectSectionHeading>
              <ProjectSectionText as="div">
                AquaCore research is progressing with lab partners and domain experts focused on safer storage, maritime energy, and novel materials. We are open to collaboration on prototyping and field data.
              </ProjectSectionText>
              <Button iconHoverShift href="/contact" iconEnd="arrow-right">
                Contact the team
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
