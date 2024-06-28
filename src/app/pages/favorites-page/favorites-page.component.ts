import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { Movie } from "@models/movie.interface";
import { LayoutComponent } from "@shared/layout/layout.component";
import { getMoviesById } from "@utilities/getMoviesById";

@Component({
  selector: "app-favorites-page",
  standalone: true,
  imports: [
    LayoutComponent,
    MoviesListComponent
  ],
  templateUrl: "./favorites-page.component.html",
  styleUrl: "./favorites-page.component.scss"
})
export class FavoritesPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const ids =  params["ids"].split(",").map(Number) as number[];
      if (ids) {
        this.movies = getMoviesById(ids);
      }
    });
  }

}
