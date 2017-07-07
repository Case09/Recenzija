import { IS_LOGGED_IN } from './constants';

export function authenticate(loggedIn) {
  return {
    type: IS_LOGGED_IN,
    isLoggedIn: loggedIn
  };
}
