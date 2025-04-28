export const fetchTickets = (tickets) => ({
  type: 'FETCH_TICKETS',
  payload: tickets,
});

export const areTicketsLoaded = (value) => ({
  type: 'ARE_TICKETS_LOADED',
  payload: value,
});
