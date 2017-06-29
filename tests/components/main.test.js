import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Main from '../../src/components/Main';

describe('Main', () => {
    it ('should render without errors', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.length).to.equal(1);
    });
});