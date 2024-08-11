import { City } from "@models/city.interface";
import { Country } from "@models/country.interface";
import { createAction, props } from "@ngrx/store";
import { countryCityActionTypes } from "@store/country-city/action-types";

const createLoadActions = <T>(type: string) => ({
  load: createAction(countryCityActionTypes.LOAD(type)),
  loadSuccess: createAction(countryCityActionTypes.LOAD_SUCCESS(type), props<{ items: T[] }>()),
  loadFailure: createAction(countryCityActionTypes.LOAD_FAILURE(type), props<{ error: string }>())
});

export const countriesActions = createLoadActions<Country>("Countries");
export const citiesActions = createLoadActions<City>("Cities");

export const setCountry = createAction(
  countryCityActionTypes.SET_COUNTRY,
  props<{ country: Country }>(),
)

export const setCity = createAction(
  countryCityActionTypes.SET_CITY,
  props<{ city: City }>(),
)
