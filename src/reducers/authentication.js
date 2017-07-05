import { IS_LOGGED_IN } from '../actions/constants';


export default function (state = false, action) {
  switch (action.type) {
    case IS_LOGGED_IN:
      return action.payload
    default:
      return state;
  }
}
