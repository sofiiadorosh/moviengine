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

  private getOptions() {
    return { params: new HttpParams().set("api_key", environment.apiKey) };
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

  updateList(list: Movie[], id: number) {
    const movieIndex = list.findIndex((movie) => movie.id === id);

    if (movieIndex !== -1) {
      list.splice(movieIndex, 1);
    } else {
      const addedMovie = [...new Set([
        ...nowPlayingMovies,
        ...popularMovies,
        ...topRatedMovies,
        ...upcomingMovies])]
        .find((movie) => movie.id === id);

      if (addedMovie) {
        list.push(addedMovie);
      }
    }
  }

  updateFavorites(id: number) {
    this.updateList(this.favoriteMovies, id);
  }

  getFavoritesMovies() {
    return this.favoriteMovies;
  }

  updateWatchLater(id: number) {
    this.updateList(this.watchLaterMovies, id);
  }

  getWatchLaterMovies() {
    return this.watchLaterMovies;
  }

  getMovieById(id: number): Observable<MovieDetails> {
    return this.httpClient.get<MovieDetails>(`${environment.apiBaseUrl}/movie/${id}`,
      this.getOptions());
  }
}
