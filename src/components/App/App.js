import Logo from '../Logo';
import TransfersFilter from '../TransfersFilter';
import Tabs from '../Tabs';
import Tickets from '../Tickets';
import LoadMoreButton from '../LoadMoreButton';

import '../../styles/global.scss';
import styles from './App.module.scss';
function App() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Logo />
      </header>
      <div className={styles.main}>
        <TransfersFilter />
        <div className={styles.content}>
          <Tabs />
          <Tickets />
          <LoadMoreButton />
        </div>
      </div>
    </div>
  );
}

export default App;
