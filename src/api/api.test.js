import { fetchApi, singleUrl } from './api.js';

describe('api', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: 'return results',
      })
    }));        
  });

  it('should call fetchApi', async ()=> {
    expect(window.fetch).not.toHaveBeenCalled();
    await fetchApi();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should throw an error in fetchApi when error is hit', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404,
    }));

    const expectedError = Error('Initial fetch failed');
    expect(fetchApi('')).rejects.toEqual(expectedError);
  });

  it('should call singleUrl', async ()=> {
    expect(window.fetch).not.toHaveBeenCalled();
    await singleUrl();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should throw an error in singleUrl when error is hit', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404,
    }));

    const expectedError = Error('Single Url fetch failed');
    expect(singleUrl('')).rejects.toEqual(expectedError);
  });
});