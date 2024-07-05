import {Movie} from "@models/movie.interface";

export interface MovieListResponse {
  dates: {
    maximum: string,
    minimum: string,
  },
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number,
}
