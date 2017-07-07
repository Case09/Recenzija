import { LOGGED_IN } from './constants';

export function login(loggedIn) {
  return {
    type: LOGGED_IN,
    loggedIn
  };
}
