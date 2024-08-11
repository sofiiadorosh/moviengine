import { createSelector } from "@ngrx/store";
import { AppState } from "@store/index";

export const selectCountryCityState = (state: AppState) => state.countryCity;

export const selectCountries = createSelector(
  selectCountryCityState,
  (state) => state.countries
)

export const selectCities = createSelector(
  selectCountryCityState,
  (state) => state.cities
)

export const selectCountry = createSelector(
  selectCountryCityState,
  (state) => state.country
)

export const selectCity = createSelector(
  selectCountryCityState,
  (state) => state.city
)

export const selectIsLoading = createSelector(
  selectCountryCityState,
  (state) => state.isLoading
)

export const selectError = createSelector(
  selectCountryCityState,
  (state) => state.error
)
