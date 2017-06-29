import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './stores/appStore';
import App from './app';

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>, document.getElementById('root'));