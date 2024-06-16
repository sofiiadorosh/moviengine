import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MovieItemComponent } from "@components/movie-item/movie-item.component";
import { movies } from "@constants/movies";
import { Movie } from "@models/movie.model";

@Component({
  selector: "app-movies-list",
  standalone: true,
  imports: [CommonModule, MovieItemComponent],
  templateUrl: "./movies-list.component.html",
  styleUrl: "./movies-list.component.scss",
})
export class MoviesListComponent {
  movies: Movie[] = movies;
  favoriteMovies: Movie[] = [];
  watchLaterMovies: Movie[] = [];

  private addToList(list: Movie[], id: number) {
    const movieInList = list.find((movie) => movie.id === id);
    if (movieInList) return list;
    const addedMovie = this.movies.find((movie) => movie.id === id);
    if (addedMovie) {
      return [...list, addedMovie];
    }
    return list;
  }

  onAddToFavorites(id: number) {
    this.favoriteMovies = this.addToList(this.favoriteMovies, id);
  }

  onAddToWatchlist(id: number) {
    this.watchLaterMovies = this.addToList(this.watchLaterMovies, id);
  }
}
