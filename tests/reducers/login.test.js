import { expect } from 'chai';
import { LOGGED_IN } from '../../src/actions/constants';
import loginReducer from '../../src/reducers/login';

describe('Login reducer', () => {
  it ('handles action of type LOGGED_IN', () => {
    const action = {
      type: LOGGED_IN,
      loggedIn: false
    }
    expect(loginReducer([], action)).to.eql({loggedIn: false})
  });
});
