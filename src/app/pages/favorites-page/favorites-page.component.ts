import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { Movie } from "@models/movie.interface";
import { Store} from "@ngrx/store";
import { LoaderComponent } from "@shared/loader/loader.component";
import { AppState} from "@store/index";
import { selectFavoriteMovies, selectIsLoading } from "@store/movies/selectors";
import { Observable } from "rxjs";

@Component({
  selector: "app-favorites-page",
  standalone: true,
  imports: [
    MoviesListComponent,
    AsyncPipe,
    LoaderComponent
  ],
  templateUrl: "./favorites-page.component.html",
  styleUrl: "./favorites-page.component.scss"
})
export class FavoritesPageComponent {
  movies$: Observable<Movie[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.movies$ = this.store.select(selectFavoriteMovies);
    this.isLoading$ = this.store.select(selectIsLoading);
  }
}
