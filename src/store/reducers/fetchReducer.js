const initialState = {
  tickets: [],
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TICKETS':
      return { ...state, tickets: [...state.tickets, ...action.payload] };
    case 'ARE_TICKETS_LOADED':
      return { ...state, areTicketsLoaded: action.payload };
    default:
      return state;
  }
};
