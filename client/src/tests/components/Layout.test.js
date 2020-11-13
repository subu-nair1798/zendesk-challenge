import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../components/Layout';

describe('<Layout />', () => {
    it('renders Page Layout', () => {
        const wrapper = shallow(<Layout />);
        expect(wrapper).toMatchSnapshot();
    });
});