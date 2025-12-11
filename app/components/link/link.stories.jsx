import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://q1x-portfolio-admin.q1x.xyz">Primary link</Link>
    <Link secondary href="https://q1x-portfolio-admin.q1x.xyz">
      Secondary link
    </Link>
  </StoryContainer>
);
