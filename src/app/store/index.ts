import { ActionReducer } from "@ngrx/store";
import { AuthEffects } from "@store/authentication/effects";
import { authReducer } from "@store/authentication/reducers";
import { AuthState } from "@store/authentication/state";
import { filtersReducer } from "@store/filters/reducers";
import { FiltersState } from "@store/filters/state";
import { MoviesEffects } from "@store/movies/effects";
import { moviesReducer } from "@store/movies/reducers";
import { MoviesState } from "@store/movies/state";

export interface AppState {
  movies: MoviesState,
  auth: AuthState,
  filters: FiltersState,
}

export interface AppStore {
  movies: ActionReducer<MoviesState>,
  auth: ActionReducer<AuthState>,
  filters: ActionReducer<FiltersState>
}

export const appStore: AppStore = {
  movies: moviesReducer,
  auth: authReducer,
  filters: filtersReducer,
}

export const appEffects = [AuthEffects, MoviesEffects];
