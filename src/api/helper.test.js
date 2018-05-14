import { getHomeWorld, getSpecies, getPlanetDetails } from './helper.js';
import { mockPeople, mockPeopleObj, mockHomeWorld, mockPlanetObj, mockPlanets } from '../mockData.js';

describe('getHomeWorld', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockHomeWorld
      })
    })
    )
  })

  it('getHomeWorld should call fetch with the correct params', async () => {
    expect(window.fetch).not.toHaveBeenCalled()
    await getHomeWorld(mockPeopleObj)
    expect(window.fetch).toHaveBeenCalledWith(mockPeopleObj.results[0].homeworld)
  })

  it('getHomeWorld should throw and error', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404,
    }))

    const expectedError = Error('Fetch failed')

    try {
      await getHomeWorld('');
    } catch (error) {
      expect(error).toEqual(expectedError)
    }
  })

  it.skip('should return an obj of results', async () => {
    const data = await getHomeWorld()
    expect(typeof data).toEqual('object')
  })

})

describe('getSpecies', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockHomeWorld
      })
    })
    )
  })

  it('getSpecies should call fetch with the correct params', async () => {
    expect(window.fetch).not.toHaveBeenCalled()
    await getSpecies(mockPeopleObj)
    expect(window.fetch).toHaveBeenCalledWith(mockPeopleObj.results[0].species)
  })

  it('getSpecies should throw and error', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404,
    }))

    const expectedError = Error('unsuccessful fetch for species')

    try {
      await getSpecies('');
    } catch (error) {
      expect(error).toEqual(expectedError)
    }
  })

  it.skip('should return an obj of results', async () => {
    const data = await getHomeWorld()
    expect(typeof data).toEqual('object')
  })
})

describe('getPlanetDetails', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockPlanets
      })
    })
    )
  })

  it.skip('getPlanetDetails should call fetch with the correct params', async () => {
    expect(window.fetch).not.toHaveBeenCalled()
    await getPlanetDetails(mockPlanetObj)
    expect(window.fetch).toHaveBeenCalledWith(mockPlanetObj.results[0].residents)
  })

  it.skip('getPlanetDetails should throw and error', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404,
    }))

    const expectedError = Error('unsuccessful fetch for species')

    try {
      await getPlanetDetails('');
    } catch (error) {
      expect(error).toEqual(expectedError)
    }
  })

})