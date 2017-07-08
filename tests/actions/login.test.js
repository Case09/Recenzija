import { expect } from 'chai';
import { LOGGED_IN } from '../../src/actions/constants';
import { login } from '../../src/actions/login';

describe('login action', () => {
  it ('has the correct type', () => {
    const action = login();
    expect(action.type).to.equal(LOGGED_IN);
  });

  it ('has the correct payload if logged in', () => {
    const action = login(true);
    expect(action.loggedIn).to.equal(true);
  });

  it ('has the correct payload if logged out', () => {
    const action = login(false);
    expect(action.loggedIn).to.equal(false);
  })
});
