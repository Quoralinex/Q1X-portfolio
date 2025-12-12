import sentinelHelmet from '~/assets/portfolio/hardline-sentinel-x-helmet.png';
import hardlineLogo from '~/assets/portfolio/hardline-logo.png';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { List, ListItem } from '~/components/list';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';

const title = 'Hardline / Sentinel-X';
const description =
  'A modular armour concept that pairs ballistic protection with sensing, comms, and HUD-ready headgear.';

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SentinelX = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectHeader
          title={title}
          description="Flagship protective platform combining ALON visors, composite shells, and a modular compute bay for sensors and HUDs."
        />

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sentinelHelmet} 1400w, ${sentinelHelmet} 2400w`}
              width={1600}
              height={1600}
              placeholder={sentinelHelmet}
              alt="Sentinel-X helmet with ALON visor and side module"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 80vw, 720px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Platform goals</ProjectSectionHeading>
              <ProjectSectionText as="div">
                Hardline focuses on lightweight, modular armour for defence, VIP protection, critical infrastructure security, and responders who need integrated sensing without sacrificing protection.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Key elements</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>ALON transparent ceramic visors paired with carbon-fibre and Kevlar composite shells.</ListItem>
                  <ListItem>Modular side bay sized for smartphone-class processors, batteries, and comms stacks.</ListItem>
                  <ListItem>HUD-ready optics and sensor feeds for situational awareness.</ListItem>
                  <ListItem>Body armour concepts built from the same material system for family-level compatibility.</ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Roadmap</ProjectSectionHeading>
              <ProjectSectionText as="div">
                We are refining ergonomics, thermal management, and ballistic performance with partners while developing electronics reference designs that can host tactical radios, compute, and power for future HUD integrations.
              </ProjectSectionText>
              <Button iconHoverShift href="/contact" iconEnd="arrow-right">
                Discuss Sentinel-X
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${hardlineLogo} 512w, ${hardlineLogo} 1024w`}
              width={1024}
              height={512}
              placeholder={hardlineLogo}
              alt="Hardline badge"
              sizes={`(max-width: ${media.mobile}px) 80vw, 420px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
