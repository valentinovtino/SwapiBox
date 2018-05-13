import React from 'react';
import ReactDOM from 'react';
// import renderer from 'react-test-renderer';
import App from './App.js';
import { shallow } from 'enzyme';

describe('App', () => {
    let app;
    

    beforeEach( async () => {
        app = shallow(<App />, {disableLifecycleMethods: true})

    })

    it('should match the snapshot', () => {
        // const appSnapShot = create(<App />).JSON;

        expect(app).toMatchSnapshot();
    })
    it('should have default states', async () => {
        // console.log(wrapper)
       const wrapper = await shallow(<App />)
        expect(wrapper.state().film).toEqual([])
        expect(wrapper.state().people).toEqual([])
        expect(wrapper.state().vehicles).toEqual([])
        expect(wrapper.state().planets).toEqual([])
        expect(wrapper.state().cleanedCardData).toEqual([])
        expect(wrapper.state().cardType).toEqual('')

    })

    it('should setState', () => {

    })

    it('should call fetchApi', () => {

    })

    it('should call checkCardType with the correct params', () => {

    })
    
    it('should update vehicle ste when getVehicleData is called', () => {

    })

    it('conbineObj should return correct Obj')

    //

    it('the state of cardType should update when button is clicked', async () => {
        // const wrapper = await shallow(<App />)

        app.find('.people-btn').simulate('click');
        expect(app.state('cardType')).toEqual('people')
    })

})