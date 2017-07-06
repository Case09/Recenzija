import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import UserSettings from '../../src/components/UserSettings';

describe('UserSettings', () => {
    it ('should render without errors', () => {
        const wrapper = shallow(<UserSettings />);
        expect(wrapper.length).to.equal(1);
    })
});
