import React from 'react';
import ReactDOM from 'react';
// import renderer from 'react-test-renderer';
import App from './App.js';
import { shallow } from 'enzyme';
import { mockPeople, mockPeopleObj, mockHomeWorld, mockPlanetObj, mockPlanets } from '../../mockData.js';
import { getpeopleData } from './app.js';

describe('App', () => {
  let app;
    

  beforeEach( async () => {
    app = shallow(<App />, {disableLifecycleMethods: true});

  });

  it('should match the snapshot', () => {
    // const appSnapShot = create(<App />).JSON;

    expect(app).toMatchSnapshot();
  });

  it('should have default states', async () => {
    const wrapper = await shallow(<App />);
    expect(wrapper.state().film).toEqual([]);
    expect(wrapper.state().people).toEqual([]);
    expect(wrapper.state().vehicles).toEqual([]);
    expect(wrapper.state().planets).toEqual([]);
    expect(wrapper.state().cleanedCardData).toEqual([]);
    expect(wrapper.state().cardType).toEqual('');

  });

  it.skip('the state of cardType should update when button is clicked', async () => {
    // const wrapper = await shallow(<App />)

    app.find('.people-btn').simulate('click');
    expect(app.state('cardType')).toEqual('people');
  });
  

  it.skip(' getpeopleData should setState of people when called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockPeopleObj
      })
    })
    );

    expect(window.fetch).not.toHaveBeenCalled();
    await getpeopleData(mockPeopleObj);
    expect(window.fetch).toHaveBeenCalledWith(mockPeopleObj);
    expect(app.state('people')).toEqual(mockPeopleObj);
  });

  it.skip(' getPlanetData should setState of people when called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockPeopleObj
      })
    })
    );

    expect(window.fetch).not.toHaveBeenCalled();
    await getPlanetData(mockPeopleObj);
    expect(window.fetch).toHaveBeenCalledWith(mockPlanetObj);
    expect(app.state('planets')).toEqual(mockPlanetObj);
  });

  it.skip(' getVehicleData should setState of people when called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockVehicleObj
      })
    })
    );

    expect(window.fetch).not.toHaveBeenCalled();
    await getpeopleData(mockPeopleObj);
    expect(window.fetch).toHaveBeenCalledWith(mockPlanetObj);
    expect(app.state('vehicles')).toEqual(mockPlanetObj);
  });

  it('should call fetchApi', () => {

  });

  it('should call checkCardType with the correct params', () => {

  });
    
  it('conbineObj should return correct Obj', () => {
    
  });

  it('on handleClick, it should make a fetch call and pass the correct type through the api and cleaner functions', async () => {
    expect(app.instance().state.vehicles).not.toBeDefined();
    
    const e = { target: {id: 'vehicles'}};
    const data = {
      results: [{
        "crew": "46",
        "model": "Digger Crawler",
        "name": "Sand Crawler",
        "passengers": "30",
        "vehicle_class": "wheeled"
      }]
    };
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(data)
    }));
    
    app.instance().handleClick(e);
    app.update();

    expect(window.fetch).toHaveBeenCalled();
  });

});