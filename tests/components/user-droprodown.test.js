import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';

import { UserDropdown } from '../../src/components/UserDropdown';


describe('UserDropdown', () => {

  describe('render', () => {
    it('should render without errors', () => {
      const wrapper = shallow(<UserDropdown />);
      expect(wrapper.length).to.equal(1);
    });

    it('should show dropdown component', () => {
      const wrapper = shallow(<UserDropdown />);
      expect(wrapper.find('.dropdown').length).to.equal(1);
    });
  });

  it('should only show login li if user is not logged in', () => {
    const props = {
      loggedIn: false
    }
    const wrapper = shallow(<UserDropdown {...props}/>);
    expect(wrapper.find('Link').length).to.equal(1);
  });

  it('should show logout, userSettings and avatar li if user is logged in', () => {
    const props = {
      loggedIn: true
    }
    const wrapper = shallow(<UserDropdown {...props}/>);
    expect(wrapper.find('li').length).to.equal(3);
  });

});
