import {Component, OnDestroy, OnInit} from "@angular/core";
import {MoviesListComponent} from "@components/movies-list/movies-list.component";
import {Movie} from "@models/movie.interface";
import {MovieService} from "@services/movie/movie.service";
import {Subscription} from "rxjs";


@Component({
  selector: "app-popular-movies-page",
  standalone: true,
  imports: [
    MoviesListComponent
  ],
  templateUrl: "./popular-movies-page.component.html",
  styleUrl: "./popular-movies-page.component.scss"
})
export class PopularMoviesPageComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  private moviesSubscription: Subscription = new Subscription();

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.moviesSubscription = this.movieService.getPopularMovies().subscribe((response) =>
      this.movies = response.results);
  }

  ngOnDestroy() {
    if (this.moviesSubscription) {
      this.moviesSubscription.unsubscribe();
    }
  }
}
