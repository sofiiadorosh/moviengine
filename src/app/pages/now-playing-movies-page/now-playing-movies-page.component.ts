import { Component } from "@angular/core";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { nowPlayingMovies } from "@constants/movies";
import { Movie } from "@models/movie.interface";
import { LayoutComponent } from "@shared/layout/layout.component";

@Component({
  selector: "app-now-playing-movies-page",
  standalone: true,
  imports: [
    LayoutComponent,
    MoviesListComponent
  ],
  templateUrl: "./now-playing-movies-page.component.html",
  styleUrl: "./now-playing-movies-page.component.scss"
})
export class NowPlayingMoviesPageComponent {
  movies: Movie[] = nowPlayingMovies;
  favoritesMovies: number[] = [];
  watchLaterMovies: number[] = [];

  private addToList(list: number[], id: number) {
    const movieInList = list.find((movieId) => movieId === id);
    if (movieInList) return list;
    return [...list, id];
  }

  onAddToFavorites(id: number) {
    this.favoritesMovies = this.addToList(this.favoritesMovies, id);
  }

  onAddToWatchlist(id: number) {
    this.watchLaterMovies = this.addToList(this.watchLaterMovies, id);
  }
}
