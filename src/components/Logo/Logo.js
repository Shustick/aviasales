import { ReactComponent as PlanetIcon } from '../../assets/Form.svg';

import styles from './Logo.module.scss';

function Logo() {
  return (
    <div className={styles.logo}>
      <PlanetIcon />
    </div>
  );
}

export default Logo;
