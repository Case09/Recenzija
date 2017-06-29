import constants from '../actions/constants';


const appReducer = (state = [], action) => {
  switch (action.type) {
    case constants.IS_ALIVE:
      return action.payload
    default:
      return state;
  }
}


export default appReducer;