import { createReducer, on } from "@ngrx/store";
import {
  favoriteMoviesActions,
  movieDetailsActions,
  nowPlayingMoviesActions,
  popularMoviesActions,
  topRatedMoviesActions,
  upcomingMoviesActions,
  watchLaterActions } from "@store/movies/actions";
import { initialState, MoviesState } from "@store/movies/state";

export const moviesReducer = createReducer(
  initialState,
  on(nowPlayingMoviesActions.load, (state): MoviesState => ({
    ...state, isLoading: true
  })),
  on(nowPlayingMoviesActions.loadSuccess, (state, { movies }): MoviesState => ({
    ...state, isLoading: false, nowPlaying: movies
  })),
  on(nowPlayingMoviesActions.loadFailure, (state, { error }): MoviesState => ({
    ...state, isLoading: false, error
  })),

  on(popularMoviesActions.load, (state): MoviesState => ({
    ...state, isLoading: true
  })),
  on(popularMoviesActions.loadSuccess, (state, { movies }): MoviesState => ({
    ...state, isLoading: false, popular: movies
  })),
  on(popularMoviesActions.loadFailure, (state, { error }): MoviesState => ({
    ...state, isLoading: false, error
  })),

  on(topRatedMoviesActions.load, (state): MoviesState => ({
    ...state, isLoading: true
  })),
  on(topRatedMoviesActions.loadSuccess, (state, { movies }): MoviesState => ({
    ...state, isLoading: false, topRated: movies
  })),
  on(topRatedMoviesActions.loadFailure, (state, { error }): MoviesState => ({
    ...state, isLoading: false, error
  })),

  on(upcomingMoviesActions.load, (state): MoviesState => ({
    ...state, isLoading: true
  })),
  on(upcomingMoviesActions.loadSuccess, (state, { movies }): MoviesState => ({
    ...state, isLoading: false, upcoming: movies
  })),
  on(upcomingMoviesActions.loadFailure, (state, { error }): MoviesState => ({
    ...state, isLoading: false, error
  })),

  on(favoriteMoviesActions.load, (state): MoviesState => ({
    ...state, isLoading: true
  })),
  on(favoriteMoviesActions.loadSuccess, (state, { movies }): MoviesState => ({
    ...state, isLoading: false, favorite: movies
  })),
  on(favoriteMoviesActions.loadFailure, (state, { error }): MoviesState => ({
    ...state, isLoading: false, error
  })),

  on(favoriteMoviesActions.update, (state, { movieId }): MoviesState => {
    const isFavorite = state.favoriteIds.includes(movieId);
    const updatedFavorites = isFavorite
      ? state.favoriteIds.filter(id => id !== movieId)
      : [...state.favoriteIds, movieId];
    return { ...state, favoriteIds: updatedFavorites };
  }),

  on(favoriteMoviesActions.setFavoriteMovieIds, (state, { movieIds }): MoviesState => ({
    ...state,
    favoriteIds: movieIds,
  })),

  on(watchLaterActions.load, (state): MoviesState => ({
    ...state, isLoading: true
  })),
  on(watchLaterActions.loadSuccess, (state, { movies }): MoviesState => ({
    ...state, isLoading: false, watchLater: movies
  })),
  on(watchLaterActions.loadFailure, (state, { error }): MoviesState => ({
    ...state, isLoading: false, error
  })),

  on(watchLaterActions.update, (state, { movieId }): MoviesState => {
    const isInWatchLater = state.watchLaterIds.includes(movieId);
    const updatedWatchLater = isInWatchLater
      ? state.watchLaterIds.filter(id => id !== movieId)
      : [...state.watchLaterIds, movieId];
    return { ...state, watchLaterIds: updatedWatchLater };
  }),

  on(watchLaterActions.setWatchLaterMovieIds, (state, { movieIds }): MoviesState => ({
    ...state,
    watchLaterIds: movieIds,
  })),

  on(movieDetailsActions.load, (state): MoviesState => ({
    ...state, isLoading: true
  })),
  on(movieDetailsActions.loadSuccess, (state, { movie }): MoviesState => ({
    ...state, isLoading: false, movieDetails: movie
  })),
  on(movieDetailsActions.loadFailure, (state, { error }): MoviesState => ({
    ...state, isLoading: false, error
  })),
);
