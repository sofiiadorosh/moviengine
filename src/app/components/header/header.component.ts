import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { headerLinks } from "@constants/header-links";
import { ContainerComponent } from "@shared/container/container.component";
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [ContainerComponent, SvgIconComponent, RouterLink, RouterLinkActive],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss"
})
export class HeaderComponent {
  protected readonly headerLinks = headerLinks;

}
