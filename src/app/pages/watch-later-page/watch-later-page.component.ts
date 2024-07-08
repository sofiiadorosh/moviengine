import {Component, OnInit} from "@angular/core";
import {MoviesListComponent} from "@components/movies-list/movies-list.component";
import {Movie} from "@models/movie.interface";
import {MovieService} from "@services/movie/movie.service";
import {Subscription} from "rxjs";
import {AuthenticationService} from "@services/authentication/authentication.service";

@Component({
  selector: "app-watch-later-page",
  standalone: true,
  imports: [
    MoviesListComponent
  ],
  templateUrl: "./watch-later-page.component.html",
  styleUrl: "./watch-later-page.component.scss"
})
export class WatchLaterPageComponent implements OnInit {
  movies: Movie[] = [];
  private moviesSubscription: Subscription = new Subscription();

  constructor(private movieService: MovieService,
              private authenticationService: AuthenticationService,) {}

  ngOnInit() {
    const sessionId = this.authenticationService.getSessionId();
    if (sessionId) {
      const params = { session_id: sessionId };
      this.moviesSubscription = this.movieService.getWatchLaterMovies(params).subscribe(response =>
        this.movies = response.results);
    }
  }

  ngOnDestroy() {
    if (this.moviesSubscription) {
      this.moviesSubscription.unsubscribe();
    }
  }
}
