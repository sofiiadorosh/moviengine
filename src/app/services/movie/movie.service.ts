import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Movie } from "@models/movie.interface";
import { MovieDetails } from "@models/movie-details.interface";
import { MovieListResponse } from "@models/response.interface";
import { Store } from "@ngrx/store";
import { AuthenticationService } from "@services/authentication/authentication.service";
import { AppState } from "@store/index";
import {
  selectFavoriteMoviesIds,
  selectWatchLaterMoviesIds
} from "@store/movies/selectors";
import { map, Observable, of, take } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieService {

  constructor(private httpClient: HttpClient,
    private authenticationService: AuthenticationService,
    private store: Store<AppState>) {}

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

  getTopRatedMovies(): Observable<Movie[]> {
    return this.getMovies("/movie/top_rated");
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.getMovies("/movie/upcoming");
  }

  updateList(listType: "favorite" | "watchlist", id: number) {
    const selector = listType === "favorite" ? selectFavoriteMoviesIds : selectWatchLaterMoviesIds;

    return this.store.select(selector).pipe(
      take(1),
      map(ids => {
        const movieInList = ids.includes(id);
        const body = {
          media_type: "movie",
          media_id: id,
          [listType]: !movieInList,
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
      })
    );
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
