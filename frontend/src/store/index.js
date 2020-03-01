import { createStore } from 'redux';
import { AppReducers } from './reducers';
import { AppMiddlewares } from './middlewares';


export const AppStore = (initialState = {}) => {
    return createStore(AppReducers(), initialState, AppMiddlewares())
};

