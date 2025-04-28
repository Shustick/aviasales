import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../Logo';
import TransfersFilter from '../TransfersFilter';
import Tabs from '../Tabs';
import Tickets from '../Tickets';
import LoadMoreButton from '../LoadMoreButton';
import { getTickets, getAndSaveId } from '../../api/serverApi';

import '../../styles/global.scss';
import styles from './App.module.scss';
function App() {
  const warning = useSelector((state) => state.warning);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.clear();
    getAndSaveId().then((id) => {
      dispatch(getTickets(id));
    });
  }, [dispatch]);

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
          {warning ? null : <LoadMoreButton />}
        </div>
      </div>
    </div>
  );
}

export default App;
