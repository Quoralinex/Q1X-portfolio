import ejHeader from '~/assets/portfolio/ej-header-logo-1024x256.png';
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

const title = 'Equitable Journeys';
const description =
  'A not-for-profit platform that pairs learners with relatable routes through education, training, and funding.';

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const EquitableJourneys = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectHeader
          title={title}
          description="Mapping real-world pathways so every learner can access guidance usually reserved for those with private advisers."
        />

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${ejHeader} 1024w, ${ejHeader} 2048w`}
              width={1024}
              height={256}
              placeholder={ejHeader}
              alt="Equitable Journeys wordmark and UI header"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 80vw, 720px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>What it does</ProjectSectionHeading>
              <ProjectSectionText as="div">
                Equitable Journeys helps learners explore qualifications, apprenticeships, and funding routes with story-driven guidance.
                We work with councils, charities, and employers to surface local opportunities and show how others have navigated similar choices.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Product focus</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>Guided pathways that mirror lived experience rather than generic prospectus copy.</ListItem>
                  <ListItem>Pre-recorded coaching and messaging tools that scale mentoring across cohorts.</ListItem>
                  <ListItem>Regional data and employer input so advice stays grounded in real vacancies and support.</ListItem>
                  <ListItem>Safeguarding and privacy controls suitable for council and charity programmes.</ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Get involved</ProjectSectionHeading>
              <ProjectSectionText as="div">
                We are onboarding councils, youth projects, and community organisations that want to pilot Equitable Journeys with tailored content for their learners.
              </ProjectSectionText>
              <Button iconHoverShift href="/contact" iconEnd="arrow-right">
                Talk to us
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
