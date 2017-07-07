import { LOGGED_IN } from '../actions/constants';


export default function (state = false, action) {
  switch (action.type) {
    case LOGGED_IN:
      return Object.assign({}, state, {
        authenticated: action.loggedIn
      })
    default:
      return state
  }
}
