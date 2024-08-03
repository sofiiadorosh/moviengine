import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { categories } from "@constants/categories";
import { genreIds } from "@constants/genre-ids";
import { sortParameters } from "@constants/sort-parameters";
import { DropdownComponent } from "@shared/dropdown/dropdown.component";
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: "app-filter",
  standalone: true,
  imports: [
    SvgIconComponent,
    NgClass,
    DropdownComponent
  ],
  templateUrl: "./filter.component.html",
  styleUrl: "./filter.component.scss"
})
export class FilterComponent {
  protected readonly categories = categories;
  protected readonly Object = Object;
  protected readonly genreIds = genreIds;
  protected readonly sortParameters = sortParameters;
  arrays: number[][] = this.generateArrays(5);

  private generateArrays(size: number): number[][] {
    return Array.from({ length: size }, (a, i) =>
      Array.from({ length: size }, (b, j) => (j <= i ? 1 : 0))
    );
  }
}
