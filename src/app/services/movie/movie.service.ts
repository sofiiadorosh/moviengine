import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { MovieDetails } from "@models/movie-details.interface";
import { MovieListResponse } from "@models/response.interface";
import { Store } from "@ngrx/store";
import { selectSessionId } from "@store/authentication/selectors";
import { AppState } from "@store/index";
import {
  selectFavoriteMoviesIds,
  selectWatchLaterMoviesIds,
} from "@store/movies/selectors";
import { Observable, of, switchMap, take, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor(private httpClient: HttpClient, private store: Store<AppState>) {}

  private getOptions(params: Record<string, string> = {}): { params: HttpParams } {
    return { params: new HttpParams({ fromObject: params }) };
  }

  private getMovies(endpoint: string, page: number): Observable<MovieListResponse> {
    const params: Record<string, string> = { page: page.toString() };
    return this.httpClient.get<MovieListResponse>(
      `${environment.apiBaseUrl}${endpoint}`,
      this.getOptions(params)
    );
  }

  getNowPlayingMovies(page: number): Observable<MovieListResponse> {
    return this.getMovies("/movie/now_playing", page);
  }

  getPopularMovies(page: number): Observable<MovieListResponse> {
    return this.getMovies("/movie/popular", page);
  }

  getTopRatedMovies(page: number): Observable<MovieListResponse> {
    return this.getMovies("/movie/top_rated", page);
  }

  getUpcomingMovies(page: number): Observable<MovieListResponse> {
    return this.getMovies("/movie/upcoming", page);
  }

  updateList(listType: "favorite" | "watchlist", id: number) {
    const selector =
      listType === "favorite" ? selectFavoriteMoviesIds : selectWatchLaterMoviesIds;

    return this.store.select(selector).pipe(
      take(1),
      switchMap((ids) => {
        const movieInList = ids.includes(id);
        const body = {
          media_type: "movie",
          media_id: id,
          [listType]: !movieInList,
        };

        return this.store.select(selectSessionId).pipe(
          take(1),
          switchMap((sessionId) => {
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
      })
    );
  }

  getFavoritesMovies(page: number): Observable<MovieListResponse> {
    return this.store.select(selectSessionId).pipe(
      take(1),
      switchMap((sessionId) => {
        if (sessionId) {
          const params: Record<string, string> = { session_id: sessionId, page: page.toString() };
          return this.httpClient.get<MovieListResponse>(
            `${environment.apiBaseUrl}/account/${environment.accountId}/favorite/movies`,
            this.getOptions(params)
          );
        }
        return throwError(() => new Error("Session ID not found."));
      })
    );
  }

  getWatchLaterMovies(page: number): Observable<MovieListResponse> {
    return this.store.select(selectSessionId).pipe(
      take(1),
      switchMap((sessionId) => {
        if (sessionId) {
          const params: Record<string, string> = { session_id: sessionId, page: page.toString() };
          return this.httpClient.get<MovieListResponse>(
            `${environment.apiBaseUrl}/account/${environment.accountId}/watchlist/movies`,
            this.getOptions(params)
          );
        }
        return throwError(() => new Error("Session ID not found."));
      })
    );
  }

  getMovieById(id: number): Observable<MovieDetails> {
    return this.httpClient.get<MovieDetails>(
      `${environment.apiBaseUrl}/movie/${id}`,
      this.getOptions()
    );
  }

  getMoviesByName(name: string, page: number): Observable<MovieListResponse> {
    const params: Record<string, string> = { query: name, page: page.toString() };
    return this.httpClient.get<MovieListResponse>(
      `${environment.apiBaseUrl}/search/movie`,
      this.getOptions(params)
    );
  }
}
