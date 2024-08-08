import { AsyncPipe } from "@angular/common";
import { Component, OnInit} from "@angular/core";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterComponent } from "@components/filter/filter.component";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { Movie } from "@models/movie.interface";
import { Store } from "@ngrx/store";
import { LoaderComponent } from "@shared/loader/loader.component";
import { PaginationComponent } from "@shared/pagination/pagination.component";
import * as filtersActions from "@store/filters/actions";
import { selectPage } from "@store/filters/selectors";
import { AppState } from "@store/index";
import { searchedMoviesActions } from "@store/movies/actions";
import { selectIsLoading, selectSearchedMovies } from "@store/movies/selectors";
import { SvgIconComponent } from "angular-svg-icon";
import { Observable } from "rxjs";

@Component({
  selector: "app-search-page",
  standalone: true,
  imports: [
    SvgIconComponent,
    ReactiveFormsModule,
    FilterComponent,
    MoviesListComponent,
    AsyncPipe,
    LoaderComponent,
    FormsModule,
    PaginationComponent
  ],
  templateUrl: "./search-page.component.html",
  styleUrl: "./search-page.component.scss"
})
export class SearchPageComponent implements OnInit {
  movies$: Observable<Movie[]>;
  isLoading$: Observable<boolean>;
  page$: Observable<number>;
  query = "";

  constructor(private store: Store<AppState>) {
    this.movies$ = this.store.select(selectSearchedMovies);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.page$ = this.store.select(selectPage);
  }

  ngOnInit() {
    this.loadMovies();
  }

  onSubmitHandler() {
    console.log(this.query)
    if (this.query.length > 3) {
      this.store.dispatch(filtersActions.setQuery({ query: this.query }));
    }
  }

  loadMovies() {
    this.store.dispatch(searchedMoviesActions.load());
  }
}
