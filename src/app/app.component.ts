import { Component } from "@angular/core";
import { MovieListComponent } from "@components/movie-list/movie-list.component";
import { ContainerComponent } from "@shared/container/container.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ContainerComponent, MovieListComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
}
