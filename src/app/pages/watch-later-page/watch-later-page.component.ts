import {AsyncPipe} from "@angular/common";
import { Component } from "@angular/core";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { Movie } from "@models/movie.interface";
import { Store } from "@ngrx/store";
import { LoaderComponent } from "@shared/loader/loader.component";
import { AppState } from "@store/index";
import { watchLaterActions } from "@store/movies/actions";
import { selectIsLoading, selectWatchLaterMovies } from "@store/movies/selectors";
import { Observable } from "rxjs";

@Component({
  selector: "app-watch-later-page",
  standalone: true,
  imports: [
    MoviesListComponent,
    AsyncPipe,
    LoaderComponent
  ],
  templateUrl: "./watch-later-page.component.html",
  styleUrl: "./watch-later-page.component.scss"
})
export class WatchLaterPageComponent {
  movies$: Observable<Movie[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.movies$ = this.store.select(selectWatchLaterMovies);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.loadMovies();
  }

  loadMovies() {
    this.store.dispatch(watchLaterActions.load());
  }
}
