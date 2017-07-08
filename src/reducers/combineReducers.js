import { combineReducers, applyMiddleware } from 'redux';
import loginReducer from './login';
import { routerReducer } from 'react-router-redux'



const rootReducer = combineReducers({
    router: routerReducer,
    loggedIn: loginReducer
});

export default rootReducer;
