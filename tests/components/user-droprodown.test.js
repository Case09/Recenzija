import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import UserDropdown from '../../src/components/UserDropdown';

describe('UserDropdown', () => {
  it ('should render without errors', () => {
    const wrapper = shallow(<UserDropdown />);
    expect(wrapper.length).to.equal(1);
  });

  it ('should show dropdown component', () => {
    const wrapper = shallow(<UserDropdown />);
    expect(wrapper.find('.dropdown').length).to.equal(1);
  });

  it ('should show dropdown when clicked', () => {
    const wrapper = shallow(<UserDropdown />);

  });

  it ('should close dropdown if it is already open')
  it ('should show two elements in dropdown')
  it ('should only show login li if user is not logged in')
  it ('should show avatar and name component by default if user is logged in')
  it ('should show user settings and logout li if user is logged in')

});
