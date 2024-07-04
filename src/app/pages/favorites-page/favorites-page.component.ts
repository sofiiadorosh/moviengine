import {Component, OnInit} from "@angular/core";
import {MoviesListComponent} from "@components/movies-list/movies-list.component";
import {Movie} from "@models/movie.interface";
import {MovieService} from "@services/movie/movie.service";

@Component({
  selector: "app-favorites-page",
  standalone: true,
  imports: [
    MoviesListComponent
  ],
  templateUrl: "./favorites-page.component.html",
  styleUrl: "./favorites-page.component.scss"
})
export class FavoritesPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getFavoritesMovies();
  }

}
