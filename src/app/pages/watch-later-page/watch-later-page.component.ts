import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Movie } from "@models/movie.interface";
import { getMoviesById } from "@utilities/getMoviesById";

@Component({
  selector: "app-watch-later-page",
  standalone: true,
  imports: [],
  templateUrl: "./watch-later-page.component.html",
  styleUrl: "./watch-later-page.component.scss"
})
export class WatchLaterPageComponent implements OnInit {
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
