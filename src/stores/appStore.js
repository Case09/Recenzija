import { createStore, applyMiddleware }  from 'redux'
import appReducer  from '../reducers/appReducer';

const logger = (store) => (next) => (action) => {
  console.log('dispatching: ', action);
  return next(action);
}

const store = createStore(appReducer, applyMiddleware(logger));
export default store;