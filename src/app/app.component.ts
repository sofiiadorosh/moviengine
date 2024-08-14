import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "@components/header/header.component";
import { SidebarComponent } from "@components/sidebar/sidebar.component";
import { Store } from "@ngrx/store";
import { selectSessionId } from "@store/authentication/selectors";
import { AppState } from "@store/index";
import { favoriteMoviesActions, watchLaterActions } from "@store/movies/actions";
import { take } from "rxjs/operators";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  sessionId$ = this.store.select(selectSessionId);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.sessionId$
      .pipe(take(1))
      .subscribe(sessionId => {
        if (sessionId) {
          this.loadFavoriteMovies();
          this.loadWatchLaterMovies();
        }
      });
  }

  loadFavoriteMovies() {
    this.store.dispatch(favoriteMoviesActions.load());
  }

  loadWatchLaterMovies() {
    this.store.dispatch(watchLaterActions.load());
  }
}
