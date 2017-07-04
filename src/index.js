import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './stores/appStore';
import App from './app';
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import requireAuth from './components/require_authentication.js';
import UserSettings from './components/UserSettings';

ReactDOM.render(
  <Provider store={appStore}>
    <Router>
        <div>
          <Route path="/" component={<App />} />
          <Route path="/userSettings" component={requireAuth(<UserSettings />)} />
        </div>
    </Router>
  </Provider>, document.getElementById('root'));
