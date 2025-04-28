const initialState = 'cheapest';

export const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TABS':
      return action.payload;
    default:
      return state;
  }
};
