import { CommonModule } from "@angular/common";
import {
  Component, EventEmitter, Input, Output,
} from "@angular/core";
import { Movie } from "@models/movie.model";
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: "app-movie-item",
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: "./movie-item.component.html",
  styleUrl: "./movie-item.component.scss",
})
export class MovieItemComponent {
  @Input() item!: Movie;
  @Output() addedToFavorites: EventEmitter<number> = new EventEmitter<number>();
  @Output() addedToWatchlist: EventEmitter<number> = new EventEmitter<number>();
  baseImageUrl = "https://image.tmdb.org/t/p/original";
  maxOverviewLength = 178;

  get imageUrl(): string {
    return `${this.baseImageUrl}/${this.item.backdrop_path}`;
  }

  get genres(): string[] {
    return this.transformGenreIds();
  }

  get shorterDescription(): string {
    if (this.item.overview.length > this.maxOverviewLength) {
      return `${this.item.overview.substring(0, this.maxOverviewLength + 1)}...`;
    }
    return this.item.overview;
  }

  get rating(): number[] {
    const rate = Math.round(this.item.vote_average / 2);
    return Array.from({ length: 5 }, (_, i) => i + 1)
      .map((number) => (number <= rate ? 1 : 0));
  }

  addToFavorites(id: number) {
    this.addedToFavorites.emit(id);
  }

  addToWatchlist(id: number) {
    this.addedToWatchlist.emit(id);
  }

  transformGenreIds(): string[] {
    const genres: Record<number, string> = {
      12: "Adventure",
      14: "Fantasy",
      16: "Animation",
      18: "Drama",
      27: "Horror",
      28: "Action",
      35: "Comedy",
      36: "History",
      37: "Western",
      53: "Thriller",
      80: "Crime",
      99: "Documentary",
      878: "Sci-Fi",
      9648: "Mystery",
      10402: "Music",
      10749: "Romance",
      10751: "Family",
      10752: "War",
      10770: "TV Movie",
    };
    return this.item.genre_ids.map((id) => genres[id].toLowerCase());
  }
}
