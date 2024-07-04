import {Component, OnInit} from "@angular/core";
import {MoviesListComponent} from "@components/movies-list/movies-list.component";
import {Movie} from "@models/movie.interface";
import {MovieService} from "@services/movie/movie.service";

@Component({
  selector: "app-now-playing-movies-page",
  standalone: true,
  imports: [
    MoviesListComponent
  ],
  templateUrl: "./now-playing-movies-page.component.html",
  styleUrl: "./now-playing-movies-page.component.scss"
})
export class NowPlayingMoviesPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getNowPlayingMovies();
  }
}
