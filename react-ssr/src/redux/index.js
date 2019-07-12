import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from './home/reducer';
// import clientAxios from '../client/request';
// import serverAxios from '../server/request';

const reducer = combineReducers({
  home: homeReducer
});

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
}
// export const getClientStore = () => {
//   const defaultState = window.context ? window.context.state : {};
//   return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
// }