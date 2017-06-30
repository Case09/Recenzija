import { expect } from 'chai';
import { IS_ALIVE } from '../../src/actions/constants';
import { isAlive } from '../../src/actions/';

describe('actions', () => {
  it ('has the correct type', () => {
    const action = isAlive();
    expect(action.type).to.equal(IS_ALIVE);
  });

  it ('has the correct payload', () => {
    const action = isAlive(true);
    expect(action.payload).to.equal(true);
  });
});