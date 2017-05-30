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
  }
};

export default bankActionCreators;