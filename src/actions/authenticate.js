import { IS_LOGGED_IN } from './constants';

export default function authenticate(loggedIn) {
  return {
    type: IS_LOGGED_IN,
    payload: loggedIn
  };
}
