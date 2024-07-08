import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "@environments/environment";
import {Movie} from "@models/movie.interface";
import {MovieDetails} from "@models/movie-details.interface";
import {MovieListResponse} from "@models/response.interface";
import {AuthenticationService} from "@services/authentication/authentication.service";
import {map, Observable, of} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieService {

  constructor(private httpClient: HttpClient,
    private authenticationService: AuthenticationService) {}

  private getOptions(params: Record<string, string> = {}): { params: HttpParams } {
    const accessParams = { api_key: environment.apiKey };
    const allParams = { ...accessParams, ...params };
    const httpParams = new HttpParams({ fromObject: allParams });
    return { params: httpParams };
  }

  private getMovies(endpoint: string): Observable<Movie[]> {
    return this.httpClient.get<MovieListResponse>(`${environment.apiBaseUrl}${endpoint}`, this.getOptions())
      .pipe(map((response) => response.results));
  }

  getNowPlayingMovies(): Observable<Movie[]> {
    return this.getMovies("/movie/now_playing");
  }

  getPopularMovies(): Observable<Movie[]> {
    return this.getMovies("/movie/popular");
  }

  getTopRateMovies(): Observable<Movie[]> {
    return this.getMovies("/movie/top_rated");
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.getMovies("/movie/upcoming");
  }

  updateList(listType: string, id: number) {
    const body = {
      media_type: "movie",
      media_id: id,
      [listType]: true,
    };
    const sessionId = this.authenticationService.getSessionId();
    if (sessionId) {
      const params: Record<string, string> = { session_id: sessionId };
      return this.httpClient.post(
        `${environment.apiBaseUrl}/account/${environment.accountId}/${listType}`,
        body,
        this.getOptions(params)
      );
    }
    return of([]);
  }

  updateFavorites(id: number) {
    return this.updateList("favorite", id);
  }

  getFavoritesMovies() {
    const sessionId = this.authenticationService.getSessionId();
    if (sessionId) {
      const params: Record<string, string> = { session_id: sessionId };
      return this.httpClient.get<MovieListResponse>(
        `${environment.apiBaseUrl}/account/${environment.accountId}/favorite/movies`,
        this.getOptions(params)).pipe(map((response) => response.results));
    }
    return of([]);
  }

  updateWatchLater(id: number) {
    return this.updateList("watchlist", id);
  }

  getWatchLaterMovies() {
    const sessionId = this.authenticationService.getSessionId();
    if (sessionId) {
      const params: Record<string, string> = { session_id: sessionId };
      return this.httpClient.get<MovieListResponse>(
        `${environment.apiBaseUrl}/account/${environment.accountId}/watchlist/movies`,
        this.getOptions(params)).pipe(map((response) => response.results));
    }
    return of([]);
  }

  getMovieById(id: number): Observable<MovieDetails> {
    return this.httpClient.get<MovieDetails>(`${environment.apiBaseUrl}/movie/${id}`,
      this.getOptions());
  }
}
