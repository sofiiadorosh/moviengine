import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Movie } from "@models/movie.interface";
import { MovieDetails } from "@models/movie-details.interface";
import { MovieListResponse } from "@models/response.interface";
import { Store } from "@ngrx/store";
import { selectSessionId } from "@store/authentication/selectors";
import { AppState } from "@store/index";
import {
  selectFavoriteMoviesIds,
  selectWatchLaterMoviesIds
} from "@store/movies/selectors";
import { map, Observable, of, switchMap, take } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(
    private httpClient: HttpClient,
    private store: Store<AppState>
  ) {}

  private getOptions(params: Record<string, string> = {}): { params: HttpParams } {
    return { params: new HttpParams({ fromObject: params }) };
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
      switchMap(ids => {
        const movieInList = ids.includes(id);
        const body = {
          media_type: "movie",
          media_id: id,
          [listType]: !movieInList,
        };

        return this.store.select(selectSessionId).pipe(
          take(1),
          switchMap(sessionId => {
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

  getFavoritesMovies(): Observable<Movie[]> {
    return this.store.select(selectSessionId).pipe(
      take(1),
      switchMap(sessionId => {
        if (sessionId) {
          const params: Record<string, string> = { session_id: sessionId };
          return this.httpClient.get<MovieListResponse>(
            `${environment.apiBaseUrl}/account/${environment.accountId}/favorite/movies`,
            this.getOptions(params)).pipe(map((response) => response.results));
        }
        return of([]);
      })
    );
  }

  getWatchLaterMovies(): Observable<Movie[]> {
    return this.store.select(selectSessionId).pipe(
      take(1),
      switchMap(sessionId => {
        if (sessionId) {
          const params: Record<string, string> = { session_id: sessionId };
          return this.httpClient.get<MovieListResponse>(
            `${environment.apiBaseUrl}/account/${environment.accountId}/watchlist/movies`,
            this.getOptions(params)).pipe(map((response) => response.results));
        }
        return of([]);
      })
    );
  }

  getMovieById(id: number): Observable<MovieDetails> {
    return this.httpClient.get<MovieDetails>(`${environment.apiBaseUrl}/movie/${id}`,
      this.getOptions());
  }
}
