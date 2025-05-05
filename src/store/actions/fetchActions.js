import { v4 as uuidv4 } from 'uuid';

export const fetchTickets = (tickets) => ({
  type: 'FETCH_TICKETS',
  payload: tickets.map((ticket) => ({ ...ticket, id: uuidv4() })),
});

export const areTicketsLoaded = (value) => ({
  type: 'ARE_TICKETS_LOADED',
  payload: value,
});
