import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        © 2025 Quoralinex (Q1X) Group. All rights reserved.
      </span>
    </Text>
    <Text size="s" align="center" className={styles.tagline}>
      Part of an ongoing portfolio of products and research projects.
    </Text>
  </footer>
);
