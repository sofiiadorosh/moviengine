import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "@components/header/header.component";
import { SidebarComponent } from "@components/sidebar/sidebar.component";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss"
})
export class LayoutComponent {

}
