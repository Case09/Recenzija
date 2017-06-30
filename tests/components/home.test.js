import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Home from '../../src/components/Home';

describe('Main', () => {

    describe('render', () => {
        it ('should render without errors', () => {
            const wrapper = shallow(<Home />);
            expect(wrapper.length).to.equal(1);
        });

        it ('should render in a wrapped div with class main', () => {
            const wrapper = shallow(<Home />);
            expect(wrapper.find('div').hasClass('main')).to.be.true;
        });

        it ('should render header component with login button', () => {
            const wrapper = shallow(<Home />);
            expect(wrapper.find('Header').length).to.equal(1);
        });

        it ('should render latest reviews component');
        it ('should render navigation component');
        it ('should render new review component');
        it ('should render footer component');
    });

});
