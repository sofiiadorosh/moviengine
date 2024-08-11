import { ActionReducer } from "@ngrx/store";
import { AuthEffects } from "@store/authentication/effects";
import { authReducer } from "@store/authentication/reducers";
import { AuthState } from "@store/authentication/state";
import { CountryCityEffects } from "@store/country-city/effects";
import { countryCityReducer } from "@store/country-city/reducers";
import { CountryCityState } from "@store/country-city/state";
import { filtersReducer } from "@store/filters/reducers";
import { FiltersState } from "@store/filters/state";
import { MoviesEffects } from "@store/movies/effects";
import { moviesReducer } from "@store/movies/reducers";
import { MoviesState } from "@store/movies/state";
import { subscriptionReducer } from "@store/subscription/reducers";
import { SubscriptionState } from "@store/subscription/state";

export interface AppState {
  movies: MoviesState,
  auth: AuthState,
  filters: FiltersState,
  countryCity: CountryCityState,
  subscription: SubscriptionState,
}

export interface AppStore {
  movies: ActionReducer<MoviesState>,
  auth: ActionReducer<AuthState>,
  filters: ActionReducer<FiltersState>
  countryCity: ActionReducer<CountryCityState>,
  subscription: ActionReducer<SubscriptionState>,
}

export const appStore: AppStore = {
  movies: moviesReducer,
  auth: authReducer,
  filters: filtersReducer,
  countryCity: countryCityReducer,
  subscription: subscriptionReducer,
}

export const appEffects = [AuthEffects, MoviesEffects, CountryCityEffects];
