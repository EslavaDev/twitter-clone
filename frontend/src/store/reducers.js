import { combineReducers, AnyAction } from 'redux';
import { layoutReducer } from './layout';
import { tweetsReducer } from './tweets';

export const AppReducers = () =>
  combineReducers({
    layout: layoutReducer,
    tweets: tweetsReducer,
  });
