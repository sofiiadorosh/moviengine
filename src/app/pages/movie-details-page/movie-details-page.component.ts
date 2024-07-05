import {CommonModule} from "@angular/common";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {MovieDetails} from "@models/movie-details.interface";
import {MovieService} from "@services/movie/movie.service";
import {SvgIconComponent} from "angular-svg-icon";
import {Subscription} from "rxjs";

@Component({
  selector: "app-movie-details-page",
  standalone: true,
  imports: [
    SvgIconComponent,
    CommonModule,
  ],
  templateUrl: "./movie-details-page.component.html",
  styleUrl: "./movie-details-page.component.scss"
})
export class MovieDetailsPageComponent implements OnInit, OnDestroy {
  movie: MovieDetails | undefined;
  baseImageUrl = "https://image.tmdb.org/t/p/original";
  imageUrl!: string;
  backdropUrl!: string;
  rating: number[] | undefined;
  private movieSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const movieId = Number(params.get("id"));
      this.movieSubscription = this.movieService.getMovieById(movieId).subscribe((movie) => {
        this.movie = movie;
        this.imageUrl = `${this.baseImageUrl}/${this.movie?.poster_path}`;
        this.backdropUrl = `${this.baseImageUrl}/${this.movie?.backdrop_path}`;
        this.rating = this.generateRatingArray();
      });
    });
  }

  generateRatingArray(): number[] | undefined {
    if (this.movie) {
      const rate = Math.round(this.movie?.vote_average / 2);
      return Array.from({ length: 5 }, (_, i) => i + 1)
        .map((number) => (number <= rate ? 1 : 0));
    }
    return undefined;
  }

  onUpdateFavorites(id: number) {
    this.movieService.updateFavorites(id);
  }

  onUpdateWatchLater(id: number) {
    this.movieService.updateWatchLater(id);
  }

  ngOnDestroy() {
    if (this.movieSubscription) {
      this.movieSubscription.unsubscribe();
    }
  }
}
