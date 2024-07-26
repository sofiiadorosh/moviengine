import {AsyncPipe} from "@angular/common";
import { Component  } from "@angular/core";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { Movie } from "@models/movie.interface";
import { Store } from "@ngrx/store";
import { AppState } from "@store/index";
import { popularMoviesActions } from "@store/movies/actions";
import { selectIsLoading, selectPopularMovies } from "@store/movies/selectors";
import { Observable } from "rxjs";

@Component({
  selector: "app-popular-movies-page",
  standalone: true,
  imports: [
    MoviesListComponent,
    AsyncPipe
  ],
  templateUrl: "./popular-movies-page.component.html",
  styleUrl: "./popular-movies-page.component.scss"
})
export class PopularMoviesPageComponent {
  movies$: Observable<Movie[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.movies$ = this.store.select(selectPopularMovies);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.loadMovies();
  }

  loadMovies() {
    this.store.dispatch(popularMoviesActions.load());
  }
}
