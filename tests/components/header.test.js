import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Header from '../../src/components/Header';

describe('Header', () => {

  describe('render', () => {
    it ('should render without errors', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.length).to.equal(1);
    });

    it ('should render div wrapper with class of header', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.first().hasClass('header')).to.be.true;
    });

    it ('should render well component', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('.well').length).to.equal(1);
    });

    it ('should render dropdown login button component', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('UserDropdown').length).to.equal(1);
    });

  });
});
