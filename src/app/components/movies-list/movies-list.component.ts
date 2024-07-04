import {CommonModule} from "@angular/common";
import {Component, Input} from "@angular/core";
import {MovieItemComponent} from "@components/movie-item/movie-item.component";
import {Movie} from "@models/movie.interface";

@Component({
  selector: "app-movies-list",
  standalone: true,
  imports: [CommonModule, MovieItemComponent],
  templateUrl: "./movies-list.component.html",
  styleUrl: "./movies-list.component.scss",
})
export class MoviesListComponent {
  @Input() movies!: Movie[];

}
