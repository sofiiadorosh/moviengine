import { Movie } from "@models/movie.interface";
import { MovieDetails } from "@models/movie-details.interface";
import { createAction, props } from "@ngrx/store";

import { movieActionTypes } from "./action-types";

const movieCategories = {
  NOW_PLAYING: "Now Playing",
  POPULAR: "Popular",
  TOP_RATED: "Top rated",
  UPCOMING: "Upcoming",
  FAVORITE: "Favorite",
  WATCH_LATER: "Watch Later",
}

const createLoadActions = (type: string) => ({
  load: createAction(movieActionTypes.LOAD(type)),
  loadSuccess: createAction(movieActionTypes.LOAD_SUCCESS(type), props<{ movies: Movie[] }>()),
  loadFailure: createAction(movieActionTypes.LOAD_FAILURE(type), props<{ error: string }>())
});

const createUpdateActions = (type: string) => ({
  update: createAction(movieActionTypes.UPDATE(type), props<{ movieId: number }>()),
  updateSuccess: createAction(movieActionTypes.UPDATE_SUCCESS(type), props<{ movieId: number }>()),
  updateFailure: createAction(movieActionTypes.UPDATE_FAILURE(type), props<{ error: string }>())
});

const createMovieDetailsLoadActions = () => ({
  load: createAction(movieActionTypes.LOAD_MOVIE_DETAILS, props<{ movieId: number }>()),
  loadSuccess: createAction(movieActionTypes.LOAD_MOVIE_DETAILS_SUCCESS, props<{ movie: MovieDetails }>()),
  loadFailure: createAction(movieActionTypes.LOAD_MOVIE_DETAILS_FAILURE, props<{ error: string }>())
});

export const nowPlayingMoviesActions = createLoadActions(movieCategories.NOW_PLAYING);
export const popularMoviesActions = createLoadActions(movieCategories.POPULAR);
export const topRatedMoviesActions = createLoadActions(movieCategories.TOP_RATED);
export const upcomingMoviesActions = createLoadActions(movieCategories.UPCOMING);

export const favoriteMoviesActions = {
  ...createLoadActions(movieCategories.FAVORITE),
  ...createUpdateActions(movieCategories.FAVORITE),
  setFavoriteMovieIds: createAction(
    movieActionTypes.SET_FAVORITE_MOVIES_IDS,
    props<{ movieIds: number[] }>()
  )
};

export const watchLaterActions = {
  ...createLoadActions(movieCategories.WATCH_LATER),
  ...createUpdateActions(movieCategories.WATCH_LATER),
  setWatchLaterMovieIds: createAction(
    movieActionTypes.SET_WATCH_LATER_MOVIES_IDS,
    props<{ movieIds: number[] }>()
  )
};

export const movieDetailsActions = createMovieDetailsLoadActions();
