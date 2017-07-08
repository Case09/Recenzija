import { createStore, applyMiddleware }  from 'redux'
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import rootReducer  from '../reducers/combineReducers';

const logger = (store) => (next) => (action) => {
  console.log('dispatching: ', action);
  return next(action);
}

const router = routerMiddleware(history);
const middleWares = [router, logger];

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middleWares));
export default store;
