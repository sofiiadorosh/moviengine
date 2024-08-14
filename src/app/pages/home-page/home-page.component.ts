import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { RoutePaths } from "@models/route-paths.enum";
import { ContainerComponent } from "@shared/container/container.component";
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [
    SvgIconComponent,
    ContainerComponent,
    RouterLink
  ],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss"
})
export class HomePageComponent {
  popularRoute = `/${RoutePaths.POPULAR}`;

}
