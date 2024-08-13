import { movieDetails } from "@constants/movie-details";
import { movies } from "@constants/movies";
import { AppState } from "@store/index";
import { MoviesState } from "@store/movies/state";

import {
  selectFavoriteMovies,
  selectFavoriteMoviesIds,
  selectIsLoading,
  selectIsMovieInWatchLater,
  selectIsMovieLiked,
  selectMovieDetails,
  selectMoviesError,
  selectNowPlayingMovies,
  selectPopularMovies,
  selectTopRatedMovies,
  selectUpcomingMovies,
  selectWatchLaterMovies,
  selectWatchLaterMoviesIds,
} from "./selectors";

const mockAuthState = {
  token: null,
  sessionId: null,
  isLoading: false,
  error: null,
};

describe("Movies Selectors", () => {
  let initialState: MoviesState;

  beforeEach(() => {
    initialState = {
      nowPlaying: [],
      popular: [],
      topRated: [],
      upcoming: [],
      favorite: [],
      watchLater: [],
      favoriteIds: [],
      watchLaterIds: [],
      movieDetails: null,
      error: null,
      isLoading: false,
    };
  });

  const createAppState = (moviesState: MoviesState): AppState => ({
    movies: moviesState,
    auth: mockAuthState,
  });

  it("should select now playing movies", () => {
    const state = createAppState({
      ...initialState,
      nowPlaying: movies,
    });

    const result = selectNowPlayingMovies.projector(state.movies);
    expect(result).toEqual(movies);
  });

  it("should select popular movies", () => {
    const state = createAppState({
      ...initialState,
      popular: movies,
    });

    const result = selectPopularMovies.projector(state.movies);
    expect(result).toEqual(movies);
  });

  it("should select top rated movies", () => {
    const state = createAppState({
      ...initialState,
      topRated: movies,
    });

    const result = selectTopRatedMovies.projector(state.movies);
    expect(result).toEqual(movies);
  });

  it("should select upcoming movies", () => {
    const state = createAppState({
      ...initialState,
      upcoming: movies,
    });

    const result = selectUpcomingMovies.projector(state.movies);
    expect(result).toEqual(movies);
  });

  it("should select favorite movies", () => {
    const state = createAppState({
      ...initialState,
      favorite: movies,
    });

    const result = selectFavoriteMovies.projector(state.movies);
    expect(result).toEqual(movies);
  });

  it("should select watch later movies", () => {
    const state = createAppState({
      ...initialState,
      watchLater: movies,
    });

    const result = selectWatchLaterMovies.projector(state.movies);
    expect(result).toEqual(movies);
  });

  it("should select favorite movie IDs", () => {
    const state = createAppState({
      ...initialState,
      favoriteIds: [1, 2, 3],
    });

    const result = selectFavoriteMoviesIds.projector(state.movies);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should select watch later movie IDs", () => {
    const state = createAppState({
      ...initialState,
      watchLaterIds: [4, 5, 6],
    });

    const result = selectWatchLaterMoviesIds.projector(state.movies);
    expect(result).toEqual([4, 5, 6]);
  });

  it("should determine if a movie is liked", () => {
    const movieId = 1;
    const state = createAppState({
      ...initialState,
      favoriteIds: [1, 2],
    });

    const result = selectIsMovieLiked(movieId).projector(state.movies.favoriteIds);
    expect(result).toBe(true);
  });

  it("should determine if a movie is in watch later", () => {
    const movieId = 4;
    const state = createAppState({
      ...initialState,
      watchLaterIds: [4, 5],
    });

    const result = selectIsMovieInWatchLater(movieId).projector(state.movies.watchLaterIds);
    expect(result).toBe(true);
  });

  it("should select movie details", () => {
    const state = createAppState({
      ...initialState,
      movieDetails: movieDetails,
    });

    const result = selectMovieDetails.projector(state.movies);
    expect(result).toEqual(movieDetails);
  });

  it("should select movies error", () => {
    const error = "Error loading movies";
    const state = createAppState({
      ...initialState,
      error,
    });

    const result = selectMoviesError.projector(state.movies);
    expect(result).toBe(error);
  });

  it("should select loading state", () => {
    const state = createAppState({
      ...initialState,
      isLoading: true,
    });

    const result = selectIsLoading.projector(state.movies);
    expect(result).toBe(true);
  });
});
