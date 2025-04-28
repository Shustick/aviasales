import { configureStore } from '@reduxjs/toolkit';

import { checkboxReducer } from './reducers/checkboxReducer';
import { ticketsReducer } from './reducers/fetchReducer';
import { tabReducer } from './reducers/tabReducer';
import { loadMoreBtnReducer } from './reducers/loadMoreBtnReducer';
import { warningReducer } from './reducers/warningReducer';

const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
    tickets: ticketsReducer,
    activeTab: tabReducer,
    loadMoreBtn: loadMoreBtnReducer,
    warning: warningReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
