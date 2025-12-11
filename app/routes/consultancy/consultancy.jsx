import { Footer } from '~/components/footer';
import { Button } from '~/components/button';
import { List, ListItem } from '~/components/list';
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
import styles from './consultancy.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Consultancy',
    description:
      'Quoralinex Consultancy delivers cost, commercial, and project management for complex capital programmes across data centres, pharma, giga-factories, and infrastructure.',
  });
};

export const Consultancy = () => {
  return (
    <>
      <ProjectContainer className={styles.consultancy}>
        <ProjectHeader
          title="Quoralinex Consultancy"
          description="Cost, commercial, and project management for complex capital programmes"
        />

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>What we do</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Independent cost and commercial management for multi-billion-euro programmes.
                  </ListItem>
                  <ListItem>
                    Contract strategy and administration across NEC, FIDIC, JCT and bespoke frameworks.
                  </ListItem>
                  <ListItem>
                    Integrated project controls: change, risk, EWN, payment and valuation workflows.
                  </ListItem>
                  <ListItem>
                    Commercial reporting for boards, investors, and funding partners.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Sectors</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <p className={styles.paragraph}>
                  We support owners, operators, and delivery partners across sectors where governance, audit
                  trails, and on-time delivery are critical:
                </p>
                <List>
                  <ListItem>Hyperscale and edge data centres</ListItem>
                  <ListItem>Pharmaceuticals and life sciences</ListItem>
                  <ListItem>Giga-factories and advanced manufacturing</ListItem>
                  <ListItem>Rail, highways, and wider civil infrastructure</ListItem>
                  <ListItem>Utilities and critical national infrastructure</ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>How we work</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <p className={styles.paragraph}>
                  We work in embedded or advisory roles alongside client teams, aligning governance frameworks
                  with local regulations and funding rules.
                </p>
                <p className={styles.paragraph}>
                  Our project controls approach stays closely linked to CPMS so contract data, change events, and
                  documentation stay coherent across projects and suppliers.
                </p>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Powered by CPMS</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <p className={styles.paragraph}>
                  Our work is increasingly underpinned by CPMS, our contract and project management suite, which
                  centralises contracts, change events, and documentation for large programmes. Learn more about
                  the platform on the CPMS page.
                </p>
                <Button iconHoverShift href="/cpms" iconEnd="arrow-right">
                  Learn about CPMS
                </Button>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Get in touch</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <p className={styles.paragraph}>
                  To discuss a specific programme or opportunity, email{' '}
                  <a href="mailto:info@quoralinex.com">info@quoralinex.com</a> or use the contact form. We can
                  provide a short discovery call and a structured proposal if there’s a good fit.
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
