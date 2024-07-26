import { ActionReducer } from "@ngrx/store";
import { MoviesEffects } from "@store/movies/effects";
import { moviesReducer } from "@store/movies/reducers";
import { MoviesState } from "@store/movies/state";

export interface AppState {
  movies: MoviesState;
}

export interface AppStore {
  movies: ActionReducer<MoviesState>;
}

export const appStore: AppStore = {
  movies: moviesReducer
}

export const appEffects = [MoviesEffects];
