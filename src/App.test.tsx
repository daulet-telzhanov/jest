import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('rendering components', () => {
    it('renders APP without crashing', () => {
        shallow(<App />);
    });

    it('renders APP component header', () => {
        const wrapper = shallow(<App />);
        const header = (
            <header>
                HEllO JEST
            </header>
        );
        expect(wrapper.contains(header)).toEqual(true);
    });
});
