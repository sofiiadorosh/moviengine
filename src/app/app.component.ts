import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "@components/header/header.component";
import { SidebarComponent } from "@components/sidebar/sidebar.component";
import { Store } from "@ngrx/store";
import { AuthenticationService } from "@services/authentication/authentication.service";
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
  constructor(
    private authenticationService: AuthenticationService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.generateSessionId();
  }

  generateSessionId() {
    this.requestToken();
  }

  requestToken() {
    this.authenticationService.getRequestToken().subscribe({
      next: (response) => {
        const token = response.request_token;
        this.authenticationService.setToken(token);
        this.askForPermission(token);
      },
      error: (error) => {
        console.error("Error requesting token:", error);
      }
    });
  }

  askForPermission(token: string) {
    this.authenticationService.askForPermission(token).subscribe({
      next: () => {
        this.createSessionId(token);
      },
      error: (error) => {
        console.error("Error asking for permission:", error);
      }
    });
  }

  createSessionId(token: string) {
    this.authenticationService.createSessionId(token).subscribe({
      next: (response) => {
        const sessionId = response.session_id;
        this.authenticationService.setSessionId(sessionId);
        this.loadFavoriteMovies();
        this.loadWatchLaterMovies();
      },
      error: (error) => {
        console.error("Error creating session ID:", error);
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
