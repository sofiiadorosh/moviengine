import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-dropdown",
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: "./dropdown.component.html",
  styleUrl: "./dropdown.component.scss"
})
export class DropdownComponent {
  @Input() orientation: "vertical" | "horizontal" = "vertical";
  @Input() options!: string[];
}
