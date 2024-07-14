import { Component, OnDestroy, OnInit } from "@angular/core";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { Movie } from "@models/movie.interface";
import { MovieService } from "@services/movie/movie.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-upcoming-movies-page",
  standalone: true,
  imports: [
    MoviesListComponent
  ],
  templateUrl: "./upcoming-movies-page.component.html",
  styleUrl: "./upcoming-movies-page.component.scss"
})
export class UpcomingMoviesPageComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  private moviesSubscription: Subscription = new Subscription();

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.moviesSubscription = this.movieService.getUpcomingMovies().subscribe((results) =>
      this.movies = results);
  }

  ngOnDestroy() {
    if (this.moviesSubscription) {
      this.moviesSubscription.unsubscribe();
    }
  }
}
