import {Component, EventEmitter, Input, Output} from "@angular/core";
import { HeaderComponent } from "@components/header/header.component";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { Movie } from "@models/movie.interface";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [
    HeaderComponent,
    MoviesListComponent
  ],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss"
})
export class LayoutComponent {
  @Input() movies!: Movie[];
  @Input() favoritesIds: number[] = [];
  @Input() watchLaterIds: number[] = [];
  @Output() addedToFavorites = new EventEmitter<number>();
  @Output() addedToWatchlist = new EventEmitter<number>();

  addToFavorites(id: number) {
    this.addedToFavorites.emit(id);
  }

  addToWatchlist(id: number) {
    this.addedToWatchlist.emit(id);
  }
}
