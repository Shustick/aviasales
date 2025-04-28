import { useSelector } from 'react-redux';

import { ReactComponent as PlanetIcon } from '../../assets/Form.svg';

import styles from './Logo.module.scss';

function Logo() {
  const areTicketsLoaded = useSelector((state) => state.tickets.areTicketsLoaded);
  return (
    <div className={`${styles.logo} ${!areTicketsLoaded ? styles.logo__loading : styles.logo__static}`}>
      <PlanetIcon />
    </div>
  );
}

export default Logo;
