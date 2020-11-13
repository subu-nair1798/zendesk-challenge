import React from 'react';
import { shallow } from 'enzyme';
import TicketList from '../../components/TicketList';
import { sampleResponse } from '../sampleResponse';
import toJson from 'enzyme-to-json';

describe("<TicketList />", () => {
    it("renders sample tickets", () => {
        const wrapper = shallow(<TicketList tickets={sampleResponse.tickets} loading={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});