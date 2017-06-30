import { IS_ALIVE } from '../actions/constants';


const appReducer = (state = [], action) => {
  switch (action.type) {
    case IS_ALIVE:
      return action.payload
    default:
      return state;
  }
}


export default appReducer;