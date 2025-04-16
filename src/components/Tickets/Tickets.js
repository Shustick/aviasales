import styles from './Tickets.module.scss';

function Tickets() {
  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <h1 className={styles.header__price}>13 400 Р </h1>
        <span className={styles.header__icon}></span>
      </div>
      <div className={styles.flight}>
        <div className={styles.flight__description}>
          <span className={styles.flight__description__title}>MOW – HKT</span>
          <span className={styles.flight__description__content}>10:45 – 08:00</span>
        </div>
        <div className={styles.flight__description}>
          <span className={styles.flight__description__title}>В пути</span>
          <span className={styles.flight__description__content}>21ч 15м</span>
        </div>
        <div className={styles.flight__description}>
          <span className={styles.flight__description__title}>2 пересадки</span>
          <span className={styles.flight__description__content}>HKG, JNB</span>
        </div>
      </div>
      <div className={styles.flight}>
        <div className={styles.flight__description}>
          <span className={styles.flight__description__title}>MOW – HKT</span>
          <span className={styles.flight__description__content}>10:45 – 08:00</span>
        </div>
        <div className={styles.flight__description}>
          <span className={styles.flight__description__title}>В пути</span>
          <span className={styles.flight__description__content}>21ч 15м</span>
        </div>
        <div className={styles.flight__description}>
          <span className={styles.flight__description__title}>2 пересадки</span>
          <span className={styles.flight__description__content}>HKG, JNB</span>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
