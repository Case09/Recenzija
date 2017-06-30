import { expect } from 'chai';
import { IS_ALIVE } from '../../src/actions/constants';
import appReducer from '../../src/reducers/appReducer';

describe('App reducer', () => {
  it ('handles action of type IS_ALIVE', () => {
    const action = {
      type: IS_ALIVE,
      payload: false
    }
    expect(appReducer([], action)).to.eql(false)
  }); 
});