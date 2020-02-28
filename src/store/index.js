import { createStore } from 'redux';
import { AppReducers } from './reducers';
import { AppMiddlewares } from './middlewares';

const store = createStore(AppReducers(), AppMiddlewares());

export const AppStore = store;

