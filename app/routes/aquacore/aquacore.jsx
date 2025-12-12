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
    title: 'AquaCore Technologies',
    description:
      'AquaCore researches water-based energy storage and information-rich materials, from batteries to subsea turbines.',
  });
};

export const AquaCore = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectHeader
          title="AquaCore Technologies"
          description="Water as an energy storage medium and information-rich material"
        />

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Research areas</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <p>
                  AquaCore explores safer water-based batteries, thin-film quantum water memory cells, and modular subsea turbines
                  for low-impact generation. The work looks at how water can store both energy and information in practical
                  systems.
                </p>
                <p>
                  We are building IP and demonstrators that make water-centric systems a realistic alternative to conventional
                  lithium and purely solid-state approaches.
                </p>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Roadmap</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <p>
                  Near-term goals include lab validation of thin-film memory cells, iterative testing of subsea turbine modules,
                  and proof-of-concept aqueous-electrolyte batteries. Longer-term we aim to productise the most promising pathways
                  with partners in energy and research.
                </p>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Discuss a collaboration</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <p>
                  To learn more about AquaCore research or explore collaboration opportunities, get in touch with the team.
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
