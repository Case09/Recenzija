import { createStore, applyMiddleware }  from 'redux'
import rootReducer  from '../reducers/combineReducers';

const logger = (store) => (next) => (action) => {
  console.log('dispatching: ', action);
  return next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
