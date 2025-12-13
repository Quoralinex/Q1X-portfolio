import { Button } from '~/components/button';
import { Icon } from '~/components/icon';
import { forwardRef } from 'react';
import styles from './nav-toggle.module.css';

export const NavToggle = forwardRef(({ menuOpen, label, ...rest }, ref) => {
  return (
    <Button
      iconOnly
      className={styles.toggle}
      aria-label={label}
      aria-expanded={menuOpen}
      ref={ref}
      {...rest}
    >
      <div className={styles.inner}>
        <Icon className={styles.icon} data-menu={true} data-open={menuOpen} icon="menu" />
        <Icon
          className={styles.icon}
          data-close={true}
          data-open={menuOpen}
          icon="close"
        />
      </div>
    </Button>
  );
});
