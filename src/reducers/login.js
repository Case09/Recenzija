import { LOGGED_IN } from '../actions/constants';

const initialState = {
  loggedIn: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return Object.assign({}, state, {
        loggedIn: action.loggedIn
      })
    default:
      return state
  }
}
