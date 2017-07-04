import { expect } from 'chai';
import { IS_LOGGED_IN } from '../../src/actions/constants';
import { authenticate } from '../../src/actions/';

describe('actions', () => {
  it ('has the correct type', () => {
    const action = authenticate();
    expect(action.type).to.equal(IS_LOGGED_IN);
  });

  it ('has the correct payload', () => {
    const action = authenticate(true);
    expect(action.payload).to.equal(true);
  });
});
