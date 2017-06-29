import constants from './constants';

const appActionCreators = {
  isAlive(alive) {
    return {
      type: constants.IS_ALIVE,
      alive
    };
  }
};

export default appActionCreators;