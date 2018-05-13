import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.js';
import { shallow } from 'enzyme';

describe('App', () => {
    // let wrapper;
    

    // beforeEach( async () => {
    //     wrapper = await shallow(<App />)

    // })

    it.skip('should match the snapshot', () => {
        const appSnapShot = renderer.create(wrapper).JSON;

        expect(appSnapShot).toMatchSnapshot();
    })
    it('should have default states', async () => {
        // console.log(wrapper)
       const wrapper = await shallow(<App />)
        expect(wrapper.state().film).toEqual([])

    })
})