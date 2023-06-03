interface Itranslations {
  cn: string;
  de?: string;
  es?: string;
  fa?: string;
  fr?: string;
  hr?: string;
  it?: string;
  ja?: string;
  kr: string;
  nl?: string;
  pt?: string;
  'pt-BR'?: string;
  tr?: string;
}
interface Icountry {
  id?: number;
  name?: string;
  phone_code?: string;
  currency?: string;
  currency_name?: string;
  currency_symbol?: string;
  translations?: Itranslations;
}

interface Istate {
  id: number;
  name: string;
  state_code: string;
  latitude: string;
  longitude: string;
}
interface Icity {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
}

interface IUseCountryProps {
  country?: string;
  state?: string;
  city?: string;
}

export type { IUseCountryProps, Icity, Icountry, Istate, Itranslations };
