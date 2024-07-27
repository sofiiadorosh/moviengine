import { ActionReducer } from "@ngrx/store";
import { AuthEffects } from "@store/authentication/effects";
import { authReducer } from "@store/authentication/reducers";
import { AuthState } from "@store/authentication/state";
import { MoviesEffects } from "@store/movies/effects";
import { moviesReducer } from "@store/movies/reducers";
import { MoviesState } from "@store/movies/state";

export interface AppState {
  movies: MoviesState,
  auth: AuthState,
}

export interface AppStore {
  movies: ActionReducer<MoviesState>,
  auth: ActionReducer<AuthState>,
}

export const appStore: AppStore = {
  movies: moviesReducer,
  auth: authReducer,
}

export const appEffects = [AuthEffects, MoviesEffects];
