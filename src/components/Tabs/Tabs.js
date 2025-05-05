import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleTabs } from '../../store/actions/tabActions';
import { resetLoadMoreBtn } from '../../store/actions/loadMoreBtnActions';

import styles from './Tabs.module.scss';

function Tabs() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.activeTab); //cheapest, fastest, optimal

  const handleTab = (ev) => {
    dispatch(resetLoadMoreBtn());
    const clickedTab = ev.target.value;
    dispatch(toggleTabs(clickedTab));
    console.log(clickedTab);
  };

  return (
    <form className={styles.tabs}>
      <input
        id="cheapest"
        type="radio"
        name="sorting-type"
        value="cheapest"
        checked={activeTab === 'cheapest'}
        className={styles.tabs__hidden_radio}
        onChange={handleTab}
      />

      <input
        id="fastest"
        type="radio"
        name="sorting-type"
        value="fastest"
        checked={activeTab === 'fastest'}
        className={styles.tabs__hidden_radio}
        onChange={handleTab}
      />

      <input
        id="optimal"
        type="radio"
        name="sorting-type"
        value="optimal"
        checked={activeTab === 'optimal'}
        className={styles.tabs__hidden_radio}
        onChange={handleTab}
      />

      <label
        htmlFor="cheapest"
        className={`${styles.tabs__tab} ${activeTab === 'cheapest' ? styles.tabs__active : ''}`}
      >
        Самый дешевый
      </label>

      <label htmlFor="fastest" className={`${styles.tabs__tab} ${activeTab === 'fastest' ? styles.tabs__active : ''}`}>
        Самый быстрый
      </label>

      <label htmlFor="optimal" className={`${styles.tabs__tab} ${activeTab === 'optimal' ? styles.tabs__active : ''}`}>
        Оптимальный
      </label>
    </form>
  );
}

export default Tabs;
