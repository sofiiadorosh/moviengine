import { Movie } from "@models/movie.interface";
import { MovieDetails } from "@models/movie-details.interface";

export interface MoviesState {
  nowPlaying: Movie[],
  popular: Movie[],
  topRated: Movie[],
  upcoming: Movie[],
  favorite: Movie[],
  watchLater: Movie[];
  favoriteIds: number[],
  watchLaterIds: number[],
  movieDetails: MovieDetails | null,
  error: string | null,
  isLoading: boolean,
}

export const initialState: MoviesState = {
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
}
