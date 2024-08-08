import { AsyncPipe, NgClass } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SortParameters } from "@models/sort-parameters.enum";

@Component({
  selector: "app-dropdown",
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe
  ],
  templateUrl: "./dropdown.component.html",
  styleUrl: "./dropdown.component.scss"
})
export class DropdownComponent {
  @Input() orientation: "vertical" | "horizontal" = "vertical";
  @Input() options!: SortParameters[];
  @Input() selectedOption!: SortParameters;
  @Output() chosenOption: EventEmitter<SortParameters> = new EventEmitter<SortParameters>();

  onOptionClickHandler(option: SortParameters, e?: KeyboardEvent) {
    if (e && e.code !== "Enter" && e.code !== "Space") return;
    this.chosenOption.emit(option);
  }
}
