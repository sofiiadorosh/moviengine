import { Component } from "@angular/core";
import { MoviesListComponent } from "@components/movies-list/movies-list.component";
import { ContainerComponent } from "@shared/container/container.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ContainerComponent, MoviesListComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
}
