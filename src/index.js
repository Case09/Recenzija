import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './stores/appStore';
import App from './app';
import { BrowserRouter as Router, Route, Match  } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import requireAuth from './components/require_authentication.js';
import UserSettings from './components/UserSettings';
import Home from './components/Home';
import Login from './components/Login';

const history = createHistory();

ReactDOM.render(
  <Provider store={appStore}>
    <ConnectedRouter history={history}>
        <div>
          <Route path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={requireAuth(Home)} />
          <Route path="/userSettings" component={requireAuth(UserSettings)} />
        </div>
    </ConnectedRouter >
  </Provider>, document.getElementById('root'));
