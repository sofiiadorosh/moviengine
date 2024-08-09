import { AsyncPipe } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { Movie } from "@models/movie.interface";
import { Store } from "@ngrx/store";
import { LoaderComponent } from "@shared/loader/loader.component";
import { PaginationComponent } from "@shared/pagination/pagination.component";
import * as filtersActions from "@store/filters/actions";
import { AppState } from "@store/index";
import { popularMoviesActions } from "@store/movies/actions";
import { selectIsLoading, selectPopularMovies } from "@store/movies/selectors";
import { Observable } from "rxjs";

@Component({
  selector: "app-popular-movies-page",
  standalone: true,
  imports: [
    MoviesListComponent,
    AsyncPipe,
    LoaderComponent,
    PaginationComponent
  ],
  templateUrl: "./popular-movies-page.component.html",
  styleUrls: ["./popular-movies-page.component.scss"]
})
export class PopularMoviesPageComponent implements OnInit, OnDestroy {
  movies$: Observable<Movie[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.movies$ = this.store.select(selectPopularMovies);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.store.dispatch(popularMoviesActions.load());
  }

  ngOnDestroy() {
    this.store.dispatch(filtersActions.resetPage());
  }
}
