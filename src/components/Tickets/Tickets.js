import { formatTransferText, formatPrice, formatTimeRange, formatDuration } from '../../utils/formatText';

import styles from './Tickets.module.scss';

function Tickets({ visibleTickets, warning }) {
  const tickets = visibleTickets.map((ticket, i) => {
    return (
      <div key={i} className={styles.ticket}>
        <div className={styles.header}>
          <h1 className={styles.header__price}>{formatPrice(ticket.price)}</h1>
          <img
            className={styles.header__icon}
            src={`//pics.avs.io/99/36/${ticket.carrier}.png`}
            alt={`${ticket.carrier} logo`}
          />
        </div>

        {ticket.segments.map((segment, j) => (
          <div key={j} className={styles.flight}>
            <div className={styles.flight__description}>
              <span className={styles.flight__description__title}>
                {segment.origin} – {segment.destination}
              </span>
              <span className={styles.flight__description__content}>
                {formatTimeRange(segment.date, segment.duration)}
              </span>
            </div>
            <div className={styles.flight__description}>
              <span className={styles.flight__description__title}>В пути</span>
              <span className={styles.flight__description__content}>{formatDuration(segment.duration)}</span>
            </div>
            <div className={styles.flight__description}>
              <span className={styles.flight__description__title}>{formatTransferText(segment.stops.length)}</span>
              <span className={styles.flight__description__content}>{segment.stops.join(', ')}</span>
            </div>
          </div>
        ))}
      </div>
    );
  });

  return (
    <>
      {warning ? <h1 className={styles.warning}>Рейсов, подходящих под заданные фильтры, не найдено</h1> : null}
      {tickets}
    </>
  );
}

export default Tickets;
