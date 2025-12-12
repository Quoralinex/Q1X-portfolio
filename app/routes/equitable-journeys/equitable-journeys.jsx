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
    title: 'Equitable Journeys',
    description:
      'Equitable Journeys helps learners map qualifications, funding, and study options with relatable pathways.',
  });
};

export const EquitableJourneys = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectHeader
          title="Equitable Journeys"
          description="Platform for guidance on qualifications, funding routes, and study options"
        />

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Purpose</ProjectSectionHeading>
              <ProjectSectionText>
                Equitable Journeys is a not-for-profit platform that works with councils, youth projects, charities, and employers
                to map real-world pathways for learners. The goal is to deliver guidance that matches the quality available to those
                with private advisers.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>How it works</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <p>
                  Learners explore relatable stories, examples, and pre-recorded coaching to navigate qualifications, funding, and
                  study choices across the UK and Europe. The platform surfaces pathways that align to each learner&apos;s context and
                  next steps.
                </p>
                <p>
                  We are building collaborations with local partners to keep the guidance accurate, practical, and grounded in real
                  opportunities.
                </p>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Get involved</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <p>
                  If you support learners and want to pilot Equitable Journeys in your organisation, reach out for a walkthrough
                  and partnership options.
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
