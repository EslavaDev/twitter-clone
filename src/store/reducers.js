import { combineReducers, AnyAction } from 'redux';
import { layoutReducer } from './layout';



// function userReducerReset(state, action) {
//   let newState = state;
//   if (action.type === 'CLEAN_PROFILE') {
//     newState = undefined;
//   }
//   return UserReducer(newState, action);
// }

export const AppReducers = () =>
  combineReducers({
    layout: layoutReducer,
  });
