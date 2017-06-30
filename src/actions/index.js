import { IS_ALIVE } from './constants';

export function isAlive(alive) {
  return {
    type: IS_ALIVE,
    payload: alive
  };
}