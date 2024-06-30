import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { genreIds } from "@constants/genre-ids";
import { Movie } from "@models/movie.interface";
import {MovieService} from "@services/movie/movie.service";
import { SvgIconComponent } from "angular-svg-icon";

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
export class MovieDetailsPageComponent implements OnInit {
  movie: Movie | undefined;
  baseImageUrl = "https://image.tmdb.org/t/p/original";
  imageUrl!: string;
  genres: string[] | undefined;
  rating: number[] | undefined;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const movieId = Number(params.get("id"));
      this.movie = this.movieService.getMovieById(movieId);
    });

    this.imageUrl = `${this.baseImageUrl}/${this.movie?.poster_path}`;
    this.genres = this.transformGenreIds(genreIds);
    this.rating = this.generateRatingArray();
  }

  transformGenreIds(genres: Record<number, string>): string[] | undefined {
    if (this.movie) {
      return this.movie.genre_ids.map((id) => genres[id].toLowerCase());
    }
    return undefined;
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

}
