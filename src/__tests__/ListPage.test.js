import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ListPage from '../pages/ListPage'

configure({adapter: new Adapter()});

describe('<ListPage />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = wrapper = shallow(<ListPage />);
    });
    test('should renders a listOfProjects from the server', () => { 
        expect(wrapper.find()).toHaveLength();
    })
});


