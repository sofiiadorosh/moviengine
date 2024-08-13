import { movieDetails } from "@constants/movie-details";
import { movies } from "@constants/movies";
import {
  favoriteMoviesActions,
  movieDetailsActions,
  nowPlayingMoviesActions,
  popularMoviesActions,
  watchLaterActions,
} from "@store/movies/actions";
import { initialState, MoviesState } from "@store/movies/state";

import { moviesReducer } from "./reducers";

describe("moviesReducer", () => {
  let state: MoviesState;

  beforeEach(() => {
    state = { ...initialState };
  });

  it("should return the initial state", () => {
    const result = moviesReducer(undefined, { type: "unknown" });
    expect(result).toEqual(initialState);
  });

  it("should handle loading state for Now Playing Movies", () => {
    const result = moviesReducer(state, nowPlayingMoviesActions.load());
    expect(result.isLoading).toBe(true);
  });

  it("should handle load success for Now Playing Movies", () => {
    const result = moviesReducer(state, nowPlayingMoviesActions.loadSuccess({ movies: [movies[0]] }));
    expect(result.isLoading).toBe(false);
    expect(result.nowPlaying).toEqual([movies[0]]);
  });

  it("should handle load failure for Now Playing Movies", () => {
    const error = "Error loading movies";
    const result = moviesReducer(state, nowPlayingMoviesActions.loadFailure({ error }));
    expect(result.isLoading).toBe(false);
    expect(result.error).toBe(error);
  });

  it("should handle loading state for Popular Movies", () => {
    const result = moviesReducer(state, popularMoviesActions.load());
    expect(result.isLoading).toBe(true);
  });

  it("should handle load success for Popular Movies", () => {
    const result = moviesReducer(state, popularMoviesActions.loadSuccess({ movies: [movies[1]] }));
    expect(result.isLoading).toBe(false);
    expect(result.popular).toEqual([movies[1]]);
  });

  it("should handle load failure for Popular Movies", () => {
    const error = "Error loading movies";
    const result = moviesReducer(state, popularMoviesActions.loadFailure({ error }));
    expect(result.isLoading).toBe(false);
    expect(result.error).toBe(error);
  });

  describe("Favorite Movies", () => {
    it("should handle loading state on load", () => {
      const result = moviesReducer(state, favoriteMoviesActions.load());
      expect(result.isLoading).toBe(true);
    });

    it("should handle load success", () => {
      const result = moviesReducer(state, favoriteMoviesActions.loadSuccess({ movies: [movies[4]] }));
      expect(result.isLoading).toBe(false);
      expect(result.favorite).toEqual([movies[4]]);
    });

    it("should handle load failure", () => {
      const error = "Error loading favorite movies";
      const result = moviesReducer(state, favoriteMoviesActions.loadFailure({ error }));
      expect(result.isLoading).toBe(false);
      expect(result.error).toBe(error);
    });

    it("should update favoriteIds on update success", () => {
      state.favoriteIds = [1, 2];
      const result = moviesReducer(state, favoriteMoviesActions.updateSuccess({ movieId: 1 }));
      expect(result.favoriteIds).toEqual([2]);
    });

    it("should add movieId to favoriteIds on update success", () => {
      state.favoriteIds = [1, 2];
      const result = moviesReducer(state, favoriteMoviesActions.updateSuccess({ movieId: 3 }));
      expect(result.favoriteIds).toEqual([1, 2, 3]);
    });
  });

  describe("Watch Later Movies", () => {
    it("should handle loading state on load", () => {
      const result = moviesReducer(state, watchLaterActions.load());
      expect(result.isLoading).toBe(true);
    });

    it("should handle load success", () => {
      const result = moviesReducer(state, watchLaterActions.loadSuccess({ movies: [movies[5]] }));
      expect(result.isLoading).toBe(false);
      expect(result.watchLater).toEqual([movies[5]]);
    });

    it("should handle load failure", () => {
      const error = "Error loading watch later movies";
      const result = moviesReducer(state, watchLaterActions.loadFailure({ error }));
      expect(result.isLoading).toBe(false);
      expect(result.error).toBe(error);
    });

    it("should update watchLaterIds on update success", () => {
      state.watchLaterIds = [1, 2];
      const result = moviesReducer(state, watchLaterActions.updateSuccess({ movieId: 1 }));
      expect(result.watchLaterIds).toEqual([2]);
    });

    it("should add movieId to watchLaterIds on update success", () => {
      state.watchLaterIds = [1, 2];
      const result = moviesReducer(state, watchLaterActions.updateSuccess({ movieId: 3 }));
      expect(result.watchLaterIds).toEqual([1, 2, 3]);
    });
  });

  describe("Movie Details", () => {
    it("should handle loading state on load", () => {
      const result = moviesReducer(state, movieDetailsActions.load({ movieId: 573435 }));
      expect(result.isLoading).toBe(true);
    });

    it("should handle load success", () => {
      const result = moviesReducer(state, movieDetailsActions.loadSuccess({ movie: movieDetails }));
      expect(result.isLoading).toBe(false);
      expect(result.movieDetails).toEqual(movieDetails);
    });

    it("should handle load failure", () => {
      const error = "Error loading movie details";
      const result = moviesReducer(state, movieDetailsActions.loadFailure({ error }));
      expect(result.isLoading).toBe(false);
      expect(result.error).toBe(error);
    });
  });
});
