import { Icity, Icountry, Istate } from '../interfaces';
import countries from './json/allCountries.json';
export const getAllCountries = (): Icountry[] => {
  return countries;
};
export const getAllStatesAsync = async (
  countryName: string
): Promise<Istate[]> => {
  const filteredCountry = countries.filter(
    (country: Icountry) => country.name === countryName
  );
  if (filteredCountry.length > 0) {
    const states = await import(`./json/${filteredCountry[0].id}/states.json`);
    return states.default;
  }
  return [];
};

export const getAllCitiesAsync = async (
  countryName: string,
  stateName: string
): Promise<Icity[]> => {
  const filteredCountry = countries.filter(
    (country: Icountry) => country.name === countryName
  );
  const states = await getAllStatesAsync(countryName);
  const selectedState = states.filter((state) => state.name === stateName)?.[0];
  if (filteredCountry.length > 0 && selectedState) {
    const cities = await import(
      `./json/${filteredCountry[0]?.id}/${selectedState.id}/cities.json`
    );
    return cities.default;
  }
  return [];
};

export default {
  getAllCountries,
  getAllStatesAsync,
  getAllCitiesAsync,
};
