import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "@components/header/header.component";
import { SidebarComponent } from "@components/sidebar/sidebar.component";
import { Store } from "@ngrx/store";
import * as AuthActions from "@store/authentication/actions";
import { selectSessionId } from "@store/authentication/selectors";
import { AppState } from "@store/index";
import { favoriteMoviesActions, watchLaterActions } from "@store/movies/actions";

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
    this.initializeAuthenticationProcess();
    this.sessionId$.subscribe(sessionId => {
      if (sessionId) {
        this.loadFavoriteMovies();
        this.loadWatchLaterMovies();
      }
    });
  }

  initializeAuthenticationProcess() {
    this.store.dispatch(AuthActions.requestToken());
  }

  loadFavoriteMovies() {
    this.store.dispatch(favoriteMoviesActions.load());
  }

  loadWatchLaterMovies() {
    this.store.dispatch(watchLaterActions.load());
  }
}
