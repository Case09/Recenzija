import { expect } from 'chai';
import { IS_LOGGED_IN } from '../../src/actions/constants';
import authenticate from '../../src/actions/authenticate';

describe('authenticate action', () => {
  it ('has the correct type', () => {
    const action = authenticate();
    expect(action.type).to.equal(IS_LOGGED_IN);
  });

  it ('has the correct payload if logged in', () => {
    const action = authenticate(true);
    expect(action.payload).to.equal(true);
  });

  it ('has the correct payload if logged out', () => {
    const action = authenticate(false);
    expect(action.payload).to.equal(false);
  })
});
