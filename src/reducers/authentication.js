import { IS_LOGGED_IN } from '../actions/constants';

const initialState = {
  authenticated: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_LOGGED_IN:
      return Object.assign({}, state, {
        authenticated: action.isLoggedIn
      })
    default:
      return state.authenticated;
  }
}
