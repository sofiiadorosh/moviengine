import {Component} from "@angular/core";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {sidebarLinks} from "@constants/sidebar-links";
import {SvgIconComponent} from "angular-svg-icon";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [
    RouterLink,
    SvgIconComponent,
    RouterLinkActive
  ],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss"
})
export class SidebarComponent {
  protected readonly sidebarLinks = sidebarLinks;

}
