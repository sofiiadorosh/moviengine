import {Component, OnDestroy, OnInit} from "@angular/core";
import {MoviesListComponent} from "@components/movies-list/movies-list.component";
import {Movie} from "@models/movie.interface";
import {AuthenticationService} from "@services/authentication/authentication.service";
import {MovieService} from "@services/movie/movie.service";
import {Subscription} from "rxjs";

@Component({
  selector: "app-favorites-page",
  standalone: true,
  imports: [
    MoviesListComponent
  ],
  templateUrl: "./favorites-page.component.html",
  styleUrl: "./favorites-page.component.scss"
})
export class FavoritesPageComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  private moviesSubscription: Subscription = new Subscription();

  constructor(private movieService: MovieService,
    private authenticationService: AuthenticationService,) {}

  ngOnInit() {
    this.moviesSubscription = this.movieService.getFavoritesMovies().subscribe(results =>
      this.movies = results);
  }

  ngOnDestroy() {
    if (this.moviesSubscription) {
      this.moviesSubscription.unsubscribe();
    }
  }
}
