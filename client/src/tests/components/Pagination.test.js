import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../../components/Pagination';
import { sampleResponse } from '../sampleResponse';
import { tickets } from '../../../../tickets.json';

describe('<Pagination />', () => {
    it('render Pagination component', () => {
        const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });
        const wrapper = shallow(<Pagination ticketsPerPage={25} totalTickets={sampleResponse.tickets.length} paginate={paginate} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should create a single page button for a sample response of 10 tickets', () => {
        const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });
        const wrapper = shallow(<Pagination ticketsPerPage={25} totalTickets={sampleResponse.tickets.length} paginate={paginate} />);
        expect(wrapper.find('.pagination').children()).toHaveLength(1);
    });

    it('should create 4 page buttons for a sample response of 100 tickets', () => {
        const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });
        const wrapper = shallow(<Pagination ticketsPerPage={25} totalTickets={tickets.length} paginate={paginate} />);
        expect(wrapper.find('.pagination').children()).toHaveLength(4);
    });
});