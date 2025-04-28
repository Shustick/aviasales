const initialState = false;

export const warningReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WARNING':
      return action.payload;
    default:
      return state;
  }
};
