import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './stores/appStore';
import App from './app';
import { BrowserRouter as Router, Route, Match  } from 'react-router-dom'
import requireAuth from './components/require_authentication.js';
import UserSettings from './components/UserSettings';
import Home from './components/Home';
import Login from './components/Login';

ReactDOM.render(
  <Provider store={appStore}>
    <Router>
        <div>
          <Route path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={requireAuth(Home)} />
          <Route path="/userSettings" component={requireAuth(UserSettings)} />
        </div>
    </Router>
  </Provider>, document.getElementById('root'));
