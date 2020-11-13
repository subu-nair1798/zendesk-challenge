import React from 'react';
import { shallow } from 'enzyme';
import TicketList from '../../components/TicketList';
import { sampleResponse } from '../sampleResponse';

describe('<TicketList />', () => {
    it('renders unordered Ticket List', () => {
        const wrapper = shallow(<TicketList tickets={sampleResponse.tickets} loading={false} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should return a list of length equal to the number of tickets', () => {
        const wrapper = shallow(<TicketList tickets={sampleResponse.tickets} loading={false} />);
        expect(wrapper.find('.list-group').children()).toHaveLength(10);
    });
});