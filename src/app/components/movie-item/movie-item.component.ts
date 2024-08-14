import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { genreIds } from "@constants/genre-ids";
import { Movie } from "@models/movie.interface";
import { RoutePaths } from "@models/route-paths.enum";
import { Store } from "@ngrx/store";
import { TruncateDescriptionPipe } from "@pipes/truncate-description/truncate-description.pipe";
import { AppState } from "@store/index";
import { favoriteMoviesActions, watchLaterActions } from "@store/movies/actions";
import { selectIsMovieInWatchLater, selectIsMovieLiked } from "@store/movies/selectors";
import { SvgIconComponent } from "angular-svg-icon";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-movie-item",
  standalone: true,
  imports: [CommonModule, SvgIconComponent, TruncateDescriptionPipe, RouterLink],
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieItemComponent implements OnInit {
  @Input() item: Movie | null = null;
  baseImageUrl = "https://image.tmdb.org/t/p/original";
  maxOverviewLength = 178;
  imageUrl: string = "./assets/webp/movie-placeholder.webp";
  genres: string[] = [];
  rating: number[] = [];
  movieId: string | null = null;
  liked$: Observable<boolean> = of(false);
  watchedLater$: Observable<boolean> = of(false);

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    if (this.item) {
      this.setMovieDetails();
    }
  }

  private setMovieDetails() {
    this.imageUrl = this.item?.backdrop_path
      ? `${this.baseImageUrl}/${this.item.backdrop_path}`
      : "./assets/webp/movie-placeholder.webp";

    this.genres = this.item?.genre_ids ? this.transformGenreIds(genreIds) : [];
    this.rating = this.item?.vote_average ? this.generateRatingArray() : [];
    this.movieId = this.item ? this.replaceId(this.item.id) : null; // Handle case where item is null
    this.liked$ = this.item ? this.store.select(selectIsMovieLiked(this.item.id)) : of(false);
    this.watchedLater$ = this.item ? this.store.select(selectIsMovieInWatchLater(this.item.id)) : of(false);
  }

  private onUpdateList(id: number, e: Event, listType: "favorite" | "watchlist") {
    e.stopPropagation();
    if (listType === "favorite") {
      this.store.dispatch(favoriteMoviesActions.update({ movieId: id }));
    } else {
      this.store.dispatch(watchLaterActions.update({ movieId: id }));
    }
  }

  onAddToFavorites(id: number, e: Event) {
    this.onUpdateList(id, e, "favorite");
  }

  onAddToWatchLater(id: number, e: Event) {
    this.onUpdateList(id, e, "watchlist");
  }

  transformGenreIds(genres: Record<number, string>): string[] {
    return this.item?.genre_ids.map((id) => genres[id].toLowerCase()) || [];
  }

  generateRatingArray(): number[] {
    const rate = Math.round((this.item?.vote_average || 0) / 2);
    return Array.from({ length: 5 }, (_, i) => i + 1)
      .map((number) => (number <= rate ? 1 : 0));
  }

  replaceId(id: number): string {
    return `/${RoutePaths.MOVIE_ID.replace(":id", String(id))}`;
  }

  navigateToMovieDetails() {
    if (this.movieId) {
      this.router.navigate([this.movieId]);
    }
  }
}
