import { AsyncPipe} from "@angular/common";
import { Component } from "@angular/core";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { Movie } from "@models/movie.interface";
import { Store } from "@ngrx/store";
import { AppState } from "@store/index";
import { upcomingMoviesActions } from "@store/movies/actions";
import { selectIsLoading, selectUpcomingMovies } from "@store/movies/selectors";
import { Observable } from "rxjs";

@Component({
  selector: "app-upcoming-movies-page",
  standalone: true,
  imports: [
    MoviesListComponent,
    AsyncPipe
  ],
  templateUrl: "./upcoming-movies-page.component.html",
  styleUrl: "./upcoming-movies-page.component.scss"
})
export class UpcomingMoviesPageComponent {
  movies$: Observable<Movie[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.movies$ = this.store.select(selectUpcomingMovies);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.loadMovies();
  }

  loadMovies() {
    this.store.dispatch(upcomingMoviesActions.load());
  }
}
