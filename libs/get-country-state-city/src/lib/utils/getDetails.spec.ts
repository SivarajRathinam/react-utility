import AllCountries from './json/allCountries.json';
import IndiaState from './json/101/states.json';
import karnatakaCities from './json/101/4026/cities.json';
import {
  getAllCitiesAsync,
  getAllCountries,
  getAllStatesAsync,
} from './getDetails';

describe('test get details functionality', () => {
  it('test get all countries', () => {
    expect(getAllCountries()).toBe(AllCountries);
  });
  it('test get all states working', async () => {
    const stateData = await getAllStatesAsync('India');
    expect(stateData).toBe(IndiaState);
  });
  it('test get all cities', async () => {
    const citiesData = await getAllCitiesAsync('India', 'Karnataka');
    expect(citiesData).toBe(karnatakaCities);
  });

  it('test get all state with invalid country', async () => {
    const stateData = await getAllStatesAsync('India1');
    expect(JSON.stringify(stateData)).toBe(JSON.stringify([]));
  });
  it('test get all city with invalid country', async () => {
    const cityData = await getAllCitiesAsync('India1', 'karnataka');
    expect(JSON.stringify(cityData)).toBe(JSON.stringify([]));
  });
});
