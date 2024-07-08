import {Component, OnDestroy,OnInit} from "@angular/core";
import {MoviesListComponent} from "@components/movies-list/movies-list.component";
import {Movie} from "@models/movie.interface";
import {AuthenticationService} from "@services/authentication/authentication.service";
import {MovieService} from "@services/movie/movie.service";
import {Subscription} from "rxjs";

@Component({
  selector: "app-watch-later-page",
  standalone: true,
  imports: [
    MoviesListComponent
  ],
  templateUrl: "./watch-later-page.component.html",
  styleUrl: "./watch-later-page.component.scss"
})
export class WatchLaterPageComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  private moviesSubscription: Subscription = new Subscription();

  constructor(private movieService: MovieService,
    private authenticationService: AuthenticationService,) {}

  ngOnInit() {
    this.moviesSubscription = this.movieService.getWatchLaterMovies().subscribe(results =>
      this.movies = results);
  }

  ngOnDestroy() {
    if (this.moviesSubscription) {
      this.moviesSubscription.unsubscribe();
    }
  }
}
