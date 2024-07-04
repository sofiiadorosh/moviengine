import {Component, OnInit} from "@angular/core";
import {MoviesListComponent} from "@components/movies-list/movies-list.component";
import {Movie} from "@models/movie.interface";
import {MovieService} from "@services/movie/movie.service";

@Component({
  selector: "app-watch-later-page",
  standalone: true,
  imports: [
    MoviesListComponent
  ],
  templateUrl: "./watch-later-page.component.html",
  styleUrl: "./watch-later-page.component.scss"
})
export class WatchLaterPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getWatchLaterMovies();
  }
}
