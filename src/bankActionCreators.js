import constants from './constants';

const bankActionCreators = {
  depositIntoAcount(amount) {
    return {
      type: constants.DEPOSIT_INTO_ACCOUNT,
      amount
    };
  },
  withdrawFromAccount(amount) {
    return {
      type: constants.WITHDRAW_FROM_ACCOUNT,
      amount
    }
  },
  toggleInfo() {
    return {
      type: constants.TOGGLE_INFO
    }
  }
};

export default bankActionCreators;