import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieDetails } from "@models/movie-details.interface";
import { Store } from "@ngrx/store";
import { LoaderComponent } from "@shared/loader/loader.component";
import { AppState } from "@store/index";
import {
  favoriteMoviesActions,
  watchLaterActions,
} from "@store/movies/actions";
import {
  selectIsLoading,
  selectIsMovieInWatchLater,
  selectIsMovieLiked,
} from "@store/movies/selectors";
import { SvgIconComponent } from "angular-svg-icon";
import {Observable, of} from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-movie-details-page",
  standalone: true,
  imports: [SvgIconComponent, CommonModule, LoaderComponent],
  templateUrl: "./movie-details-page.component.html",
  styleUrls: ["./movie-details-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailsPageComponent implements OnInit {
  movie$: Observable<MovieDetails | null>;
  isLoading$: Observable<boolean>;
  liked$: Observable<boolean> = of(false);
  watchedLater$: Observable<boolean> = of(false);
  baseImageUrl = "https://image.tmdb.org/t/p/original";
  imageUrl!: string;
  backdropUrl!: string;
  rating: number[] = [];

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.movie$ = of(null);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const movieId = Number(params.get("id"));

      this.movie$ = this.route.data.pipe(map(data => data["movie"]));

      this.liked$ = this.store.select(selectIsMovieLiked(movieId));
      this.watchedLater$ = this.store.select(selectIsMovieInWatchLater(movieId));

      this.movie$.subscribe((movie) => {
        if (movie) {
          this.imageUrl = movie.poster_path
            ? `${this.baseImageUrl}/${movie.poster_path}`
            : "./assets/webp/movie-placeholder.webp";
          this.backdropUrl = `${this.baseImageUrl}${movie.backdrop_path}`;
          this.rating = this.generateRatingArray(movie.vote_average);
        }
      });
    });
  }

  generateRatingArray(voteAverage: number): number[] {
    const rate = Math.round(voteAverage / 2);
    return Array.from({ length: 5 }, (_, i) => (i < rate ? 1 : 0));
  }

  private onUpdateList(id: number, listType: "favorite" | "watchlist") {
    if (listType === "favorite") {
      this.store.dispatch(favoriteMoviesActions.update({ movieId: id }));
    } else {
      this.store.dispatch(watchLaterActions.update({ movieId: id }));
    }
  }

  onAddToFavorites(id: number) {
    this.onUpdateList(id, "favorite");
  }

  onAddToWatchLater(id: number) {
    this.onUpdateList(id, "watchlist");
  }
}
