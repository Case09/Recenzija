import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import bankStore from './stores/bankStore';
import BankAppContainer from './app';

ReactDOM.render(
  <Provider store={bankStore}>
    <BankAppContainer />
  </Provider>, document.getElementById('root'));