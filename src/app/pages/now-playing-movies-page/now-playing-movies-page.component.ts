import { AsyncPipe } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { Movie } from "@models/movie.interface";
import { Store } from "@ngrx/store";
import { LoaderComponent } from "@shared/loader/loader.component";
import { PaginationComponent } from "@shared/pagination/pagination.component";
import * as filtersActions from "@store/filters/actions";
import { AppState } from "@store/index";
import { nowPlayingMoviesActions } from "@store/movies/actions";
import { selectIsLoading, selectNowPlayingMovies } from "@store/movies/selectors";
import { Observable } from "rxjs";

@Component({
  selector: "app-now-playing-movies-page",
  standalone: true,
  imports: [
    MoviesListComponent,
    AsyncPipe,
    LoaderComponent,
    PaginationComponent
  ],
  templateUrl: "./now-playing-movies-page.component.html",
  styleUrls: ["./now-playing-movies-page.component.scss"]
})
export class NowPlayingMoviesPageComponent implements OnInit, OnDestroy {
  movies$: Observable<Movie[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.movies$ = this.store.select(selectNowPlayingMovies);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  ngOnInit() {
    this.loadMovies();
    this.scrollToTop();
  }

  loadMovies() {
    this.store.dispatch(nowPlayingMoviesActions.load());
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  ngOnDestroy() {
    this.store.dispatch(filtersActions.resetPage());
  }
}
