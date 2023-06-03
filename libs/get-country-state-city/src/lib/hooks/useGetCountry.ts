import { useCallback, useEffect, useState } from 'react';
import { IUseCountryProps, Icity, Icountry, Istate } from '../interfaces';
import {
  getAllCitiesAsync,
  getAllCountries,
  getAllStatesAsync,
} from '../utils/getDetails';

export const useGetCountry = (props: IUseCountryProps | undefined) => {
  const [countryList, setCountryList] = useState<Icountry[]>([]);
  const [stateList, setStateList] = useState<Istate[]>([]);
  const [cityList, setCityList] = useState<Icity[]>([]);
  const { country = '', state = '' } = props ?? {};
  const updateStateList = useCallback(async () => {
    const states = await getAllStatesAsync(country);
    setStateList(states);
  }, [country]);

  const updateCityList = useCallback(async () => {
    const cities = await getAllCitiesAsync(country, state);
    setCityList(cities);
  }, [country, state]);

  useEffect(() => {
    setCountryList(getAllCountries());
  }, []);
  useEffect(() => {
    updateStateList();
  }, [updateStateList]);
  useEffect(() => {
    updateCityList();
  }, [updateCityList]);
  return {
    countryList,
    stateList,
    cityList,
  };
};

export default useGetCountry;
