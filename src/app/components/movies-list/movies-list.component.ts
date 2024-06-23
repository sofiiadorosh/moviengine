import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MovieItemComponent } from "@components/movie-item/movie-item.component";
import { Movie } from "@models/movie.interface";

@Component({
  selector: "app-movies-list",
  standalone: true,
  imports: [CommonModule, MovieItemComponent],
  templateUrl: "./movies-list.component.html",
  styleUrl: "./movies-list.component.scss",
})
export class MoviesListComponent {
  @Input() movies!: Movie[];
  @Output() addedToFavorites = new EventEmitter<number>();
  @Output() addedToWatchlist = new EventEmitter<number>();

  addToFavorites(id: number) {
    this.addedToFavorites.emit(id);
  }

  addToWatchlist(id: number) {
    this.addedToWatchlist.emit(id);
  }
}
