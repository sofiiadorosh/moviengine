import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies} from "@constants/movies";
import {environment} from "@environments/environment";
import {Movie} from "@models/movie.interface";
import {MovieDetails} from "@models/movie-details.interface";
import {MovieListResponse} from "@models/response.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  favoriteMovies: Movie[] = [];
  watchLaterMovies: Movie[] = [];

  constructor(private httpClient: HttpClient) {}

  private getOptions(params: Record<string, string> = {}): { params: HttpParams } {
    const accessParams = { api_key: environment.apiKey };
    const allParams = { ...accessParams, ...params };
    const httpParams = new HttpParams({ fromObject: allParams });
    return { params: httpParams };
  }

  getNowPlayingMovies(): Observable<MovieListResponse> {
    return this.httpClient.get<MovieListResponse>(`${environment.apiBaseUrl}/movie/now_playing`,
      this.getOptions());
  }

  getPopularMovies(): Observable<MovieListResponse> {
    return this.httpClient.get<MovieListResponse>(`${environment.apiBaseUrl}/movie/popular`,
      this.getOptions());
  }

  getTopRateMovies(): Observable<MovieListResponse> {
    return this.httpClient.get<MovieListResponse>(`${environment.apiBaseUrl}/movie/top_rated`,
      this.getOptions());
  }

  getUpcomingMovies(): Observable<MovieListResponse> {
    return this.httpClient.get<MovieListResponse>(`${environment.apiBaseUrl}/movie/upcoming`,
      this.getOptions());
  }

  updateList(listType: string, id: number, params: Record<string, string>) {
    const body = {
      media_type: "movie",
      media_id: id,
      [listType]: true,
    };
    return this.httpClient.post(
      `${environment.apiBaseUrl}/account/${environment.accountId}/${listType}`,
      body,
      this.getOptions(params)
    );
  }

  updateFavorites(id: number, params: Record<string, string>) {
    return this.updateList("favorite", id, params);
  }

  getFavoritesMovies(params: Record<string, string>): Observable<MovieListResponse> {
    return this.httpClient.get<MovieListResponse>(`${environment.apiBaseUrl}/account/${environment.accountId}/favorite/movies`,
      this.getOptions(params));
  }

  updateWatchLater(id: number, params: Record<string, string>) {
    return this.updateList("watchlist", id, params);
  }

  getWatchLaterMovies(params: Record<string, string>) {
    return this.httpClient.get<MovieListResponse>(`${environment.apiBaseUrl}/account/${environment.accountId}/watchlist/movies`,
      this.getOptions(params));
  }

  getMovieById(id: number): Observable<MovieDetails> {
    return this.httpClient.get<MovieDetails>(`${environment.apiBaseUrl}/movie/${id}`,
      this.getOptions());
  }
}
