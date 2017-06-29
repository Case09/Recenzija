import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import bankStore from '../stores/bankStore';
import constants from '../actions/constants';
import bankActionCreators from '../actions/bankActionCreators';
import PropTypes from 'prop-types';
import styles from "../app.scss"
import DepositList from './DepositList';

class BankApp extends Component {

  handleDeposit() {
    this.props.onDeposit(this.refs.amount.value);
    this.refs.amount.value = '';
  }

  handleWithdraw() {
    this.props.onWithdraw(this.refs.amount.value);
    this.refs.amount.value = '';
  }
  render() {
    return (
      <div>
        <header>
          <img src="//www.pro-react.com/logos/redux-bank.svg" width="150" />Redux Bank
        </header>
        <h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
        <div className={styles.atm}>
          <input type="text" placeholder="Enter Ammount" ref="amount" />
          <button onClick={this.handleWithdraw.bind(this)}>Withdraw</ button>
          <button onClick={this.handleDeposit.bind(this)}>Deposit</ button>
        </div>
        <div>
          <DepositList deposit={this.props.balance}/>
        </div>
      </div>
    );
  }
}

BankApp.propTypes = {
  balance: PropTypes.number,
  onDeposit: PropTypes.func,
  onWithdraw: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    balance: state.balance
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeposit: (amount) => dispatch(bankActionCreators.depositIntoAcount(amount)),
    onWithdraw: (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BankApp);

