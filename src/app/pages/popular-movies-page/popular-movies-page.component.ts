import {Component, OnInit} from "@angular/core";
import {MoviesListComponent} from "@components/movies-list/movies-list.component";
import {Movie} from "@models/movie.interface";
import {MovieService} from "@services/movie/movie.service";


@Component({
  selector: "app-popular-movies-page",
  standalone: true,
  imports: [
    MoviesListComponent
  ],
  templateUrl: "./popular-movies-page.component.html",
  styleUrl: "./popular-movies-page.component.scss"
})
export class PopularMoviesPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getPopularMovies();
  }
}
