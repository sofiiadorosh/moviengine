import { CommonModule } from "@angular/common";
import {
  Component, EventEmitter, Input, OnInit, Output,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { genreIds } from "@constants/genreIds";
import { Movie } from "@models/movie.model";
import { TruncateDescriptionPipe } from "@pipes/truncate-description/truncate-description.pipe";
import { SvgIconComponent } from "angular-svg-icon";
import { Button } from "primeng/button";
import { CardModule } from "primeng/card";
import { ChipModule } from "primeng/chip";
import { RatingModule } from "primeng/rating";

@Component({
  selector: "app-movie-item",
  standalone: true,
  imports: [CommonModule, SvgIconComponent, TruncateDescriptionPipe, CardModule, Button, RatingModule, FormsModule,
    ChipModule],
  templateUrl: "./movie-item.component.html",
  styleUrl: "./movie-item.component.scss",
})
export class MovieItemComponent implements OnInit {
  @Input() item!: Movie;
  @Output() addedToFavorites: EventEmitter<number> = new EventEmitter<number>();
  @Output() addedToWatchlist: EventEmitter<number> = new EventEmitter<number>();
  baseImageUrl = "https://image.tmdb.org/t/p/original";
  maxOverviewLength = 178;
  imageUrl!: string;
  genres!: string[];
  rating!: number;

  ngOnInit() {
    this.imageUrl = `${this.baseImageUrl}/${this.item.backdrop_path}`;
    this.genres = this.transformGenreIds(genreIds);
    this.rating = this.getRating();
  }

  addToFavorites(id: number) {
    this.addedToFavorites.emit(id);
  }

  addToWatchlist(id: number) {
    this.addedToWatchlist.emit(id);
  }

  transformGenreIds(genres: Record<number, string>): string[] {
    return this.item.genre_ids.map((id) => genres[id].toLowerCase());
  }

  getRating(): number {
    return Math.round(this.item.vote_average / 2);
  }
}
