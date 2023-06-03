// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useGetCountry } from 'get-country-state-city';
import { SyntheticEvent, useState } from 'react';

export function App() {
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>();
  const { cityList, stateList, countryList } = useGetCountry({
    country,
    state,
    city,
  });
  console.log(cityList, stateList, countryList);
  const handleCountryChange = (
    e: SyntheticEvent<HTMLSelectElement>,
    type: string
  ) => {
    const value = e.currentTarget.value;
    if (type === 'country') setCountry(value);
    if (type === 'state') setState(value);
    if (type === 'city') setCity(value);
  };
  return (
    <div>
      <select
        placeholder="select country"
        onChange={(e: SyntheticEvent<HTMLSelectElement>) =>
          handleCountryChange(e, 'country')
        }
      >
        <option>select country</option>
        {countryList.map((country) => {
          return <option key={country.name}>{country.name}</option>;
        })}
      </select>
      <select
        placeholder="select state"
        onChange={(e: SyntheticEvent<HTMLSelectElement>) =>
          handleCountryChange(e, 'state')
        }
      >
        <option>select state</option>

        {stateList.map((state) => {
          return <option key={state.name}>{state.name}</option>;
        })}
      </select>
      <select
        placeholder="select city"
        onChange={(e: SyntheticEvent<HTMLSelectElement>) =>
          handleCountryChange(e, 'city')
        }
      >
        <option>select city</option>

        {cityList.map((city) => {
          return <option key={city.name}>{city.name}</option>;
        })}
      </select>
    </div>
  );
}

export default App;
