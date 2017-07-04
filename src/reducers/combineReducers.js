import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';


const rootReducer = combineReducers({
    authenticate: authenticationReducer
});

export default rootReducer;
