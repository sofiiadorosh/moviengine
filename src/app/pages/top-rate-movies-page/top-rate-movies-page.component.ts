import { Component, OnDestroy, OnInit } from "@angular/core";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { Movie } from "@models/movie.interface";
import { MovieService } from "@services/movie/movie.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-top-rate-movies-page",
  standalone: true,
  imports: [
    MoviesListComponent
  ],
  templateUrl: "./top-rate-movies-page.component.html",
  styleUrl: "./top-rate-movies-page.component.scss"
})
export class TopRateMoviesPageComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  private moviesSubscription: Subscription = new Subscription();

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.moviesSubscription = this.movieService.getTopRateMovies().subscribe((results) =>
      this.movies = results);
  }

  ngOnDestroy() {
    if (this.moviesSubscription) {
      this.moviesSubscription.unsubscribe();
    }
  }
}
