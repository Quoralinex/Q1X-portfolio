import { Footer } from '~/components/footer';
import { Button } from '~/components/button';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';

export const meta = () => {
  return baseMeta({
    title: 'Hardline / Sentinel-X',
    description:
      'Sentinel-X is a modular armour platform combining ballistic protection, integrated sensors, and HUD-ready hardware.',
  });
};

export const SentinelX = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectHeader
          title="Hardline / Sentinel-X"
          description="Flagship protective equipment platform with modular armour and helmet systems"
        />

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Platform overview</ProjectSectionHeading>
              <ProjectSectionText>
                Sentinel-X combines ballistic protection, integrated sensors, and a HUD-ready helmet architecture. The helmet pairs
                an ALON transparent ceramic visor with a carbon-fibre and Kevlar composite shell, plus a modular side module sized
                for smartphone-class processors and batteries.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Use cases</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <p>
                  The platform roadmap covers defence, VIP protection, critical-infrastructure security, and first responders.
                  A lightweight family of helmets and body armour will support different threat profiles and operational roles.
                </p>
                <p>
                  Sensor fusion, comms, and power modules are designed to be upgraded without replacing the entire system.
                </p>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Learn more</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <p>
                  For partnerships or prototyping enquiries about Sentinel-X, contact the team for a technical briefing.
                </p>
                <Button iconHoverShift href="/contact" iconEnd="arrow-right">
                  Contact us
                </Button>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
