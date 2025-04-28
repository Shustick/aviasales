const initialState = [
  { id: 1, label: 'Все', transfers: 'all', checked: true },
  { id: 2, label: 'Без пересадок', transfers: 0, checked: true },
  { id: 3, label: '1 пересадка', transfers: 1, checked: true },
  { id: 4, label: '2 пересадки', transfers: 2, checked: true },
  { id: 5, label: '3 пересадки', transfers: 3, checked: true },
];

export const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CHECKBOX': {
      if (action.payload === 1) {
        const allChecked = state[0].checked;
        return state.map((item) => ({ ...item, checked: !allChecked }));
      }

      const updatedState = state.map((item) =>
        item.id === action.payload ? { ...item, checked: !item.checked } : item
      );

      const allOthersChecked = updatedState.filter((item) => item.id !== 1).every((item) => item.checked);

      if (allOthersChecked) {
        return updatedState.map((item) => (item.id === 1 ? { ...item, checked: true } : item));
      } else {
        return updatedState.map((item) => (item.id === 1 ? { ...item, checked: false } : item));
      }
    }

    default:
      return state;
  }
};
