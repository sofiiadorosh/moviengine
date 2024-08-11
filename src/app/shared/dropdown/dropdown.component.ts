import { AsyncPipe, NgClass } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { City } from "@models/city.interface";
import { Country } from "@models/country.interface";
import { SortParameters } from "@models/sort-parameters.enum";

@Component({
  selector: "app-dropdown",
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe
  ],
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"]
})
export class DropdownComponent<T = SortParameters | Country | City | string> {
  @Input() orientation: "vertical" | "horizontal" = "vertical";
  @Input() options!: T[];
  @Input() selectedOption: T | undefined;
  @Output() chosenOption = new EventEmitter<T>();

  onOptionClickHandler(option: T, e: KeyboardEvent | MouseEvent): void {
    const isMouseEvent = e instanceof MouseEvent;
    const isKeyboardEvent = e instanceof KeyboardEvent;

    if (isMouseEvent) {
      e.stopPropagation();
    }

    if (isKeyboardEvent) {
      e.preventDefault();
      if (e.code !== "Enter" && e.code !== "Space") return;
    }

    this.chosenOption.emit(option);
  }

  isCountry(option: unknown): option is Country {
    return (option as Country).name !== undefined;
  }

  isCity(option: unknown): option is City {
    return (option as City).name !== undefined;
  }
}
