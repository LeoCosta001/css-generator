import { createStore } from 'redux';
import rootReducer from './reducers/index.reducer';

export const store = createStore(rootReducer);
