import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: "app-pagination",
  standalone: true,
  imports: [
    SvgIconComponent,
    NgClass
  ],
  templateUrl: "./pagination.component.html",
  styleUrl: "./pagination.component.scss"
})
export class PaginationComponent {
  @Input() selectedPage!: number;
}
