import { createSelector } from "@ngrx/store";
import { AppState } from "@store/index";
import { MoviesState } from "@store/movies/state";

const selectMoviesState = (state: AppState) => state.movies;

export const selectNowPlayingMovies = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.nowPlaying
);

export const selectPopularMovies = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.popular
);

export const selectTopRatedMovies = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.topRated
);

export const selectUpcomingMovies = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.upcoming
);

export const selectFavoriteMovies = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.favorite
);

export const selectWatchLaterMovies = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.watchLater
);

export const selectFavoriteMoviesIds = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.favoriteIds
);

export const selectWatchLaterMoviesIds = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.watchLaterIds
);

export const selectIsMovieLiked = (movieId: number) =>
  createSelector(selectFavoriteMoviesIds, (favoriteIds: number[]) => favoriteIds.includes(movieId));

export const selectIsMovieInWatchLater = (movieId: number) =>
  createSelector(selectWatchLaterMoviesIds, (watchLaterIds: number[]) => watchLaterIds.includes(movieId));

export const selectMovieDetails = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.movieDetails
);

export const selectError = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.error
);

export const selectIsLoading = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.isLoading
);
