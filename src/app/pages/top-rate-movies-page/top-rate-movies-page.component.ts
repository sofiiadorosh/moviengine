import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { Movie } from "@models/movie.interface";
import { Store } from "@ngrx/store";
import { AppState } from "@store/index";
import { topRatedMoviesActions } from "@store/movies/actions";
import { selectIsLoading, selectTopRatedMovies } from "@store/movies/selectors";
import { Observable } from "rxjs";

@Component({
  selector: "app-top-rate-movies-page",
  standalone: true,
  imports: [
    MoviesListComponent,
    AsyncPipe
  ],
  templateUrl: "./top-rate-movies-page.component.html",
  styleUrl: "./top-rate-movies-page.component.scss"
})
export class TopRateMoviesPageComponent {
  movies$: Observable<Movie[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.movies$ = this.store.select(selectTopRatedMovies);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.loadMovies();
  }

  loadMovies() {
    this.store.dispatch(topRatedMoviesActions.load());
  }
}
