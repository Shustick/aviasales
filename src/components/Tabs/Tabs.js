import React, { useState } from 'react';

import styles from './Tabs.module.scss';

function Tabs() {
  const [activeTab, setActiveTab] = useState('cheapest'); //cheapest, fastest, optimal
  const handleTab = (ev) => {
    const clickedTab = ev.target.closest('li');

    if (clickedTab) {
      const selectedTab = clickedTab.classList[0];
      setActiveTab(selectedTab);
    }
  };

  return (
    <ul className={styles.tabs} onClick={handleTab}>
      <li className={`cheapest ${styles.tabs__tab} ${activeTab === 'cheapest' ? styles.tabs__active : ''}`}>
        <h2 className={styles.tabs__title}>Самый дешевый</h2>
      </li>

      <li className={`fastest ${styles.tabs__tab} ${activeTab === 'fastest' ? styles.tabs__active : ''}`}>
        <h2 className={styles.tabs__title}>Самый быстрый</h2>
      </li>

      <li className={`optimal ${styles.tabs__tab} ${activeTab === 'optimal' ? styles.tabs__active : ''}`}>
        <h2 className={styles.tabs__title}>Оптимальный</h2>
      </li>
    </ul>
  );
}

export default Tabs;
