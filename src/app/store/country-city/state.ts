import { City } from "@models/city.interface";
import { Country } from "@models/country.interface";

export interface CountryCityState {
  countries: Country[],
  cities: City[],
  country: Country | null,
  city: City | null,
  isLoading: boolean,
  error: string | null,
}

export const initialState: CountryCityState = {
  countries: [],
  cities: [],
  country: null,
  city: null,
  isLoading: false,
  error: null,
}
