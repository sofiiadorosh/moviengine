import {Injectable} from "@angular/core";
import {nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies} from "@constants/movies";
import {Movie} from "@models/movie.interface";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  favoriteMovies: Movie[] = [];
  watchLaterMovies: Movie[] = [];

  constructor() {}

  getNowPlayingMovies() {
    return nowPlayingMovies;
  }

  getPopularMovies() {
    return popularMovies;
  }

  getTopRateMovies() {
    return topRatedMovies;
  }

  getUpcomingMovies() {
    return upcomingMovies;
  }

  updateList(list: Movie[], id: number) {
    const movieIndex = list.findIndex((movie) => movie.id === id);

    if (movieIndex !== -1) {
      list.splice(movieIndex, 1);
    } else {
      // Movie is not in the list, so add it
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

  getMovieById(id: number) {
    return [...new Set([
      ...nowPlayingMovies,
      ...popularMovies,
      ...topRatedMovies,
      ...upcomingMovies])]
      .find((movie) => movie.id === id);
  }

  isMovieInFavorites(id: number) {
    return this.favoriteMovies.some(movie => movie.id === id);
  }

  isMovieInWatchLater(id: number) {
    return this.watchLaterMovies.some(movie => movie.id === id);
  }
}
