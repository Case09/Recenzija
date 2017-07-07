import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import loginReducer from './login';


const rootReducer = combineReducers({
    authenticated: authenticationReducer,
    login: loginReducer
});

export default rootReducer;
