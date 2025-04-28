const initialState = 5;

export const loadMoreBtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MORE':
      return state + 5;
    case 'RESET_BTN':
      return 5;
    default:
      return state;
  }
};
