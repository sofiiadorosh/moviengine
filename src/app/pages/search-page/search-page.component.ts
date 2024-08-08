import { AsyncPipe } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterComponent } from "@components/filter/filter.component";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { Movie } from "@models/movie.interface";
import { Store } from "@ngrx/store";
import { LoaderComponent } from "@shared/loader/loader.component";
import { PaginationComponent } from "@shared/pagination/pagination.component";
import * as filtersActions from "@store/filters/actions";
import { AppState } from "@store/index";
import { selectFilteredMovies, selectIsLoading } from "@store/movies/selectors";
import { SvgIconComponent } from "angular-svg-icon";
import { Observable, Subject } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";

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
  styleUrls: ["./search-page.component.scss"]
})
export class SearchPageComponent implements OnInit, OnDestroy {
  movies$: Observable<Movie[]>;
  isLoading$: Observable<boolean>;
  query = "";
  error: string | null = null;

  private querySubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>) {
    this.movies$ = this.store.select(selectFilteredMovies);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  ngOnInit() {
    this.querySubject.pipe(
      debounceTime(300),
      takeUntil(this.destroy$)
    ).subscribe(query => {
      if (query.length >= 3) {
        this.error = null;
        this.store.dispatch(filtersActions.setQuery({ query }));
      } else {
        this.error = "You need to type at least 3 characters";
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmitHandler() {
    if (!this.query.trim().length) {
      this.error = "We can not find something that is empty :(";
    } else {
      this.querySubject.next(this.query);
    }
  }
}
