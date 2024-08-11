import { createReducer, on } from "@ngrx/store";
import { CountryCityState, initialState } from "@store/country-city/state";

import * as countryCityActions from "./actions";

export const countryCityReducer = createReducer(
  initialState,
  on(countryCityActions.countriesActions.load, (state): CountryCityState => ({
    ...state,
    isLoading: true,
  })),
  on(countryCityActions.countriesActions.loadSuccess, (state, { items }): CountryCityState => ({
    ...state,
    countries: items,
    isLoading: false,
    error: null,
  })),
  on(countryCityActions.countriesActions.loadFailure, (state, { error }): CountryCityState => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(countryCityActions.citiesActions.load, (state): CountryCityState => ({
    ...state,
    isLoading: true,
  })),
  on(countryCityActions.citiesActions.loadSuccess, (state, { items }): CountryCityState => ({
    ...state,
    cities: items,
    isLoading: false,
    error: null,
  })),
  on(countryCityActions.citiesActions.loadFailure, (state, { error }): CountryCityState => ({
    ...state,
    isLoading: false,
    error: error,
  })),
  on(countryCityActions.setCountry, (state, { country }): CountryCityState => ({
    ...state,
    country,
  })),
  on(countryCityActions.setCity, (state, { city }): CountryCityState => ({
    ...state,
    city,
  })),
);
