import { classes } from '~/utils/style';
import styles from './content-container.module.css';

export const ContentContainer = ({ as: Component = 'div', className, children, ...rest }) => {
  return (
    <Component className={classes(styles.container, className)} {...rest}>
      {children}
    </Component>
  );
};
