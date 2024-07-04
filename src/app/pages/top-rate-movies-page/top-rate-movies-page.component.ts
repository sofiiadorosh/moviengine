import {Component, OnInit} from "@angular/core";
import {MoviesListComponent} from "@components/movies-list/movies-list.component";
import {Movie} from "@models/movie.interface";
import {MovieService} from "@services/movie/movie.service";

@Component({
  selector: "app-top-rate-movies-page",
  standalone: true,
  imports: [
    MoviesListComponent
  ],
  templateUrl: "./top-rate-movies-page.component.html",
  styleUrl: "./top-rate-movies-page.component.scss"
})
export class TopRateMoviesPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getTopRateMovies();
  }
}
