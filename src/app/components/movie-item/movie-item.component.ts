import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { genreIds } from "@constants/genre-ids";
import { Movie } from "@models/movie.interface";
import { RoutePaths } from "@models/route-paths.enum";
import { Store } from "@ngrx/store";
import { TruncateDescriptionPipe } from "@pipes/truncate-description/truncate-description.pipe";
import { AppState } from "@store/index";
import { favoriteMoviesActions, watchLaterActions } from "@store/movies/actions";
import {
  selectIsMovieInWatchLater, selectIsMovieLiked,
} from "@store/movies/selectors";
import { SvgIconComponent } from "angular-svg-icon";
import { Observable, of } from "rxjs";

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
  rating!: string;
  movieId!: string;
  liked$: Observable<boolean> = of(false);
  watchedLater$: Observable<boolean> = of(false);

  constructor(private router: Router,
    private store: Store<AppState>,) {}

  ngOnInit() {
    this.imageUrl = `${this.baseImageUrl}/${this.item.backdrop_path}`;
    this.genres = this.transformGenreIds(genreIds);
    this.rating = this.item.vote_average.toFixed();
    this.movieId = this.replaceId(this.item.id);
    this.liked$ = this.store.select(selectIsMovieLiked(this.item.id));
    this.watchedLater$ = this.store.select(selectIsMovieInWatchLater(this.item.id));
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
    return this.item.genre_ids.map((id) => genres[id].toLowerCase());
  }

  replaceId(id: number) {
    return `/${RoutePaths.MOVIE_ID.replace(":id", String(id))}`;
  }

  navigateToMovieDetails() {
    this.router.navigate([this.movieId]);
  }
}
