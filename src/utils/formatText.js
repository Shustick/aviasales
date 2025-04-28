// formatTransferText, formatPrice, formatTimeRange, formatDuration

export const formatTransferText = (transferCount) => {
  if (transferCount === 0) return 'Без пересадок';
  else if (transferCount === 1) return `${transferCount} пересадка`;
  else if (transferCount > 1 && transferCount < 5) return `${transferCount} пересадки`;
  else if (transferCount > 4) return `${transferCount} пересадок`;
};

export const formatPrice = (price) => {
  return price.toLocaleString('ru-RU') + ' ';
};

export const formatTimeRange = (dateString, durationMinutes) => {
  const startDate = new Date(dateString);
  const endDate = new Date(startDate.getTime() + durationMinutes * 60 * 1000);

  const format = (date) =>
    date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

  return `${format(startDate)} – ${format(endDate)}`;
};

export const formatDuration = (durationMinutes) => {
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;

  const parts = [];
  if (hours > 0) parts.push(`${hours}ч`);
  if (minutes > 0) parts.push(`${minutes}м`);

  return parts.join(' ');
};
