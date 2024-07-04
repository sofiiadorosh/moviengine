import {Component, OnInit} from "@angular/core";
import {MoviesListComponent} from "@components/movies-list/movies-list.component";
import {Movie} from "@models/movie.interface";
import {MovieService} from "@services/movie/movie.service";

@Component({
  selector: "app-upcoming-movies-page",
  standalone: true,
  imports: [
    MoviesListComponent
  ],
  templateUrl: "./upcoming-movies-page.component.html",
  styleUrl: "./upcoming-movies-page.component.scss"
})
export class UpcomingMoviesPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getUpcomingMovies();
  }
}
