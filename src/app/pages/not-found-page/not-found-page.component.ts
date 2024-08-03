import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { RoutePaths } from "@models/route-paths.enum";
import { ContainerComponent } from "@shared/container/container.component";
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: "app-not-found-page",
  standalone: true,
  imports: [
    ContainerComponent,
    RouterLinkActive,
    SvgIconComponent,
    RouterLink
  ],
  templateUrl: "./not-found-page.component.html",
  styleUrl: "./not-found-page.component.scss"
})
export class NotFoundPageComponent {
  protected readonly RoutePaths = RoutePaths;
}
