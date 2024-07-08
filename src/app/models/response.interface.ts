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

export interface RequestTokenResponse {
  success: boolean,
  expires_at: string,
  request_token: string,
}

export interface CreateSessionIdResponse {
  session_id: string,
  success: boolean,
}
