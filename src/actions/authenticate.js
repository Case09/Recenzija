import { IS_LOGGED_IN } from './constants';

export function authenticate() {
  return {
    type: IS_LOGGED_IN
  };
}
