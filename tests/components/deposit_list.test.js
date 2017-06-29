import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import DepositList from '../../src/components/DepositList';

describe('DepositList', () => {

  it('should render UL element', () => {
    const wrapper = shallow(<DepositList />);
    expect(wrapper.find('ul')).to.have.length(1);
  });

  it('should render LI elements inside and UL', () => {
    const wrapper = shallow(<DepositList />);
    expect(wrapper.find('ul > li')).to.have.length(1);
  });

  it('should have deposit prop', () => {
    const wrapper = mount(<DepositList deposit={1} />);
    expect(wrapper.props().deposit).to.be.equal(1);
  });

  it('should show deposit values inside LI', () => {
    const props = { deposit: 0 }
    const wrapper = mount(<DepositList {...props} />);
    expect(wrapper.props().deposit).to.equal(0);
    expect(wrapper.find('li').text()).to.equal('0');
  });

  it('should render new LI for each deposit change', () => {
  });

  it('should show not exceed 10 list items', () => {

  });

});