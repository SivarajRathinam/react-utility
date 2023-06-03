import { waitFor, renderHook } from '@testing-library/react';
import useGetCountry from './useGetCountry';
import AllCountries from '../utils/json/allCountries.json';
import indiaState from '../utils/json/101/states.json';
import karnatakaCities from '../utils/json/101/4026/cities.json';

describe('test use get country hook', () => {
  it('test countries are receiving properly', async () => {
    const { result } = renderHook(() => useGetCountry({}));
    await waitFor(() => expect(result.current.countryList).toBe(AllCountries));
  });
  it('test countries are with props as undefined', async () => {
    const { result } = renderHook(() => useGetCountry(undefined));
    await waitFor(() => expect(result.current.countryList).toBe(AllCountries));
  });
  it('test states are receiving properly', async () => {
    const { result } = renderHook(() => useGetCountry({ country: 'India' }));
    await waitFor(() => expect(result.current.stateList).toBe(indiaState));
  });
  it('test states are receiving properly', async () => {
    const { result } = renderHook(() =>
      useGetCountry({ country: 'India', state: 'Karnataka' })
    );
    await waitFor(() => expect(result.current.cityList).toBe(karnatakaCities));
  });
});
