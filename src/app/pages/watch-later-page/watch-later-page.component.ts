import { AsyncPipe } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { Movie } from "@models/movie.interface";
import { Store } from "@ngrx/store";
import { LoaderComponent } from "@shared/loader/loader.component";
import { PaginationComponent } from "@shared/pagination/pagination.component";
import * as filtersActions from "@store/filters/actions";
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
    LoaderComponent,
    PaginationComponent
  ],
  templateUrl: "./watch-later-page.component.html",
  styleUrl: "./watch-later-page.component.scss"
})
export class WatchLaterPageComponent implements OnInit, OnDestroy {
  movies$: Observable<Movie[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.movies$ = this.store.select(selectWatchLaterMovies);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.loadMovies();
  }

  ngOnInit() {
    this.scrollToTop();
  }

  loadMovies() {
    this.store.dispatch(watchLaterActions.load());
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  ngOnDestroy() {
    this.store.dispatch(filtersActions.resetPage());
  }
}
