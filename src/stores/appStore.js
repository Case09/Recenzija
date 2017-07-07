import { createStore, applyMiddleware }  from 'redux'
import rootReducer  from '../reducers/combineReducers';

const logger = (store) => (next) => (action) => {
  console.log('dispatching: ', action);
  return next(action);
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger));
export default store;
