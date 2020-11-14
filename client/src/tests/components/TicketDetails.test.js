import React from 'react';
import { shallow } from 'enzyme';
import { sampleResponse } from '../sampleResponse';
import TicketDetails from '../../components/TicketDetails';

describe('<TicketDetails />', () => {
    it('should render Card Group', () => {
        const wrapper = shallow(<TicketDetails ticket={sampleResponse.tickets[0]} />);
        expect(wrapper).toMatchSnapshot();
    });
});