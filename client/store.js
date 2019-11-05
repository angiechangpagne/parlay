/**
 * ************************************
 *
 * @module  store.js
 * @author ANGEN
 * @date
 * @description Redux 'single source of truth', state management, stateful
 *
 * ************************************
 */

 import { createStore, applyMiddleware } from 'redux';
 import { composeWithDevTools } from 'redux-devtools-extension';
 import thunk from 'redux-thunk';
 import reducers from './reducers/index';
 import { loadParlay }from './actions/actions'

 const store=createStore(
     reducers,
     composeWithDevTools(applyMiddleware(thunk)),
 );

 store.dispatch(loadParlay());


 export default store;