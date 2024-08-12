import { AsyncPipe, NgClass } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SortParameters } from "@models/sort-parameters.enum";
import { ICity,ICountry } from "country-state-city"

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
export class DropdownComponent<T = SortParameters | ICountry | ICity | string> {
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

  isCountry(option: unknown): option is ICountry {
    return (option as ICountry).name !== undefined;
  }

  isCity(option: unknown): option is ICity {
    return (option as ICity).name !== undefined;
  }
}
