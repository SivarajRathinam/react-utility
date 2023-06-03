# get-country-state-city

This React library provides utility function and a custom react hooks to fetch country, state and city details

To Install the package use the following command
```javascript

npm i react-country-state-city

```

Get Country details using utility function

```javascript

import React,{ useState , useEffect } from 'react';
import {getAllCountries, Icountry, Istate} from 'react-country-state-city'

const App = () =>{
  const [country,setCountry] = useState('')
  const [countryList,setCountryList] = useState<Icountry>([])
  const [stateList,setStateList] = useState<Istate>([])
  useEffect(()=>{
    const countries = getAllCountries();
    setCountryList(countries)
  },[])
  useEffect(()=>{
    const states = getAllStatesAsync(country);
    setStateList(states)
  },[country])
  const handleCountrySelect = ()=>{
      
  }
  return <div>
            <select>
              <option>select country</option>
              {countryList.map((country)=>{
                  return <option key={country.name} onSelect={handleCountrySelect}>{country.name}</option>
              })}
            </select>
  </div>
}

```

Get Country details using Custom React Hook

```javascript

import { useGetCountry } from 'react-country-state-city';
import {
  SyntheticEvent,
  useState,
} from 'react';

export function App() {
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>();
  const { cityList, stateList, countryList } = useGetCountry({
    country,
    state,
    city,
  });
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


```
