import { genreIds } from "@constants/genre-ids";
import { SortParameters } from "@models/sort-parameters.enum";
import { createSelector } from "@ngrx/store";
import { selectGenres, selectRating, selectSortType} from "@store/filters/selectors";
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

export const selectMovieDetails = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.movieDetails
);

export const selectIsMovieInWatchLater = (movieId: number) =>
  createSelector(selectWatchLaterMoviesIds, (watchLaterIds: number[]) => watchLaterIds.includes(movieId));

export const selectSearchedMovies = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.searched
);

export const selectError = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.error
);

export const selectIsLoading = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.isLoading
);

export const selectFilteredMovies = createSelector(
  selectSearchedMovies,
  selectGenres,
  selectRating,
  selectSortType,
  (movies, genres, rating, sortType) => {
    let filteredMovies = movies.filter(movie => {
      const matchesGenres = genres.length
        ? genres.some(genre => movie.genre_ids.map(id => genreIds[id]).includes(genre))
        : true;
      const matchesRating = rating.length ? rating.includes(Math.round(movie.vote_average / 2)) : true;

      return matchesGenres && matchesRating;
    });

    switch (sortType) {
      case SortParameters.A_TO_Z:
        filteredMovies = filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case SortParameters.Z_TO_A:
        filteredMovies = filteredMovies.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case SortParameters.RATING_LOW_TO_HIGH:
        filteredMovies = filteredMovies.sort((a, b) => a.vote_average - b.vote_average);
        break;
      case SortParameters.RATING_HIGH_TO_LOW:
        filteredMovies = filteredMovies.sort((a, b) => b.vote_average - a.vote_average);
        break;
      default:
        break;
    }

    return filteredMovies;
  }
);

