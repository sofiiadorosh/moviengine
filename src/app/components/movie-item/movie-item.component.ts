import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { genreIds } from "@constants/genre-ids";
import { Movie } from "@models/movie.interface";
import { RoutePaths } from "@models/route-paths.enum";
import { TruncateDescriptionPipe } from "@pipes/truncate-description/truncate-description.pipe";
import { MovieService} from "@services/movie/movie.service";
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: "app-movie-item",
  standalone: true,
  imports: [CommonModule, SvgIconComponent, TruncateDescriptionPipe, RouterLink],
  templateUrl: "./movie-item.component.html",
  styleUrl: "./movie-item.component.scss",
})
export class MovieItemComponent implements OnInit {
  @Input() item!: Movie;
  baseImageUrl = "https://image.tmdb.org/t/p/original";
  maxOverviewLength = 178;
  imageUrl!: string;
  genres!: string[];
  rating!: number[];
  movieId!: string;
  isInFavorites = false;
  isInWatchLater = false;

  constructor(private router: Router,
    private movieService: MovieService) {}

  ngOnInit() {
    this.imageUrl = `${this.baseImageUrl}/${this.item.backdrop_path}`;
    this.genres = this.transformGenreIds(genreIds);
    this.rating = this.generateRatingArray();
    this.movieId = this.replaceId(this.item.id);
  }

  onUpdateFavorites(id: number, e: Event) {
    e.stopPropagation();
    this.movieService.updateFavorites(id);
  }

  onUpdateWatchLater(id: number, e: Event) {
    e.stopPropagation();
    this.movieService.updateWatchLater(id);
  }

  transformGenreIds(genres: Record<number, string>): string[] {
    return this.item.genre_ids.map((id) => genres[id].toLowerCase());
  }

  generateRatingArray(): number[] {
    const rate = Math.round(this.item.vote_average / 2);
    return Array.from({ length: 5 }, (_, i) => i + 1)
      .map((number) => (number <= rate ? 1 : 0));
  }

  replaceId(id: number) {
    return `/${RoutePaths.MOVIE_ID.replace(":id", String(id))}`;
  }

  navigateToMovieDetails() {
    this.router.navigate([this.movieId]);
  }
}
