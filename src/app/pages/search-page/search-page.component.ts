import { AsyncPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { FilterComponent } from "@components/filter/filter.component";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { Movie } from "@models/movie.interface";
import { Store } from "@ngrx/store";
import { ContainerComponent } from "@shared/container/container.component";
import { LoaderComponent } from "@shared/loader/loader.component";
import { AppState } from "@store/index";
import { nowPlayingMoviesActions } from "@store/movies/actions";
import { selectIsLoading, selectNowPlayingMovies } from "@store/movies/selectors";
import { SvgIconComponent } from "angular-svg-icon";
import { Observable } from "rxjs";

@Component({
  selector: "app-search-page",
  standalone: true,
  imports: [
    ContainerComponent,
    SvgIconComponent,
    ReactiveFormsModule,
    FilterComponent,
    MoviesListComponent,
    AsyncPipe,
    LoaderComponent
  ],
  templateUrl: "./search-page.component.html",
  styleUrl: "./search-page.component.scss"
})
export class SearchPageComponent implements OnInit {
  searchForm = this.formBuilder.group({
    query: ["", Validators.required],
  });
  movies$: Observable<Movie[]>;
  isLoading$: Observable<boolean>;

  constructor(private formBuilder: FormBuilder,
    private store: Store<AppState>) {
    this.movies$ = this.store.select(selectNowPlayingMovies);
    this.isLoading$ = this.store.select(selectIsLoading);
  }
  onSubmitHandler() {
    console.log(this.searchForm.value);
  }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.store.dispatch(nowPlayingMoviesActions.load());
  }
}
