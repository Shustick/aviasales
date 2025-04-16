import { createStore, combineReducers } from 'redux';

import { checkboxReducer } from './reducers/checkboxReducer';

const rootReducer = combineReducers({
  checkbox: checkboxReducer,
  // другие редьюсеры можно добавить сюда
});

const store = createStore(rootReducer);

export default store;
