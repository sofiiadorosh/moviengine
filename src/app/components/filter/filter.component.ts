import { AsyncPipe, NgClass } from "@angular/common";
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { categories } from "@constants/categories";
import { genreIds } from "@constants/genre-ids";
import { sortParameters } from "@constants/sort-parameters";
import { Categories } from "@models/categories.enum";
import { SortParameters } from "@models/sort-parameters.enum";
import { Store } from "@ngrx/store";
import { DropdownComponent } from "@shared/dropdown/dropdown.component";
import { resetFilters, setCategory, setGenre, setRating, setSortType } from "@store/filters/actions";
import { selectCategory, selectGenres, selectRating, selectSortType } from "@store/filters/selectors";
import { AppState } from "@store/index";
import { SvgIconComponent } from "angular-svg-icon";
import { Observable } from "rxjs";

@Component({
  selector: "app-filter",
  standalone: true,
  imports: [
    SvgIconComponent,
    NgClass,
    DropdownComponent,
    AsyncPipe
  ],
  templateUrl: "./filter.component.html",
  styleUrl: "./filter.component.scss"
})
export class FilterComponent implements OnInit, OnDestroy {
  protected readonly categories = categories;
  protected readonly Object = Object;
  protected readonly genreIds = genreIds;
  protected readonly sortParameters = sortParameters;
  arrays: number[][] = this.generateArrays(5);
  sortType$: Observable<SortParameters>;
  category$: Observable<Categories>;
  genres$: Observable<string[]>;
  rating$: Observable<number[]>;
  isDropdownOpened = false;

  @ViewChild("dropdown", { static: false }) dropdown!: ElementRef;

  constructor(private store: Store<AppState>) {
    this.sortType$ = this.store.select(selectSortType);
    this.category$ = this.store.select(selectCategory);
    this.genres$ = this.store.select(selectGenres);
    this.rating$ = this.store.select(selectRating);
  }

  ngOnInit() {
    document.addEventListener("click", this.onClickOutsideHandler.bind(this));
  }

  private generateArrays(size: number): number[][] {
    return Array.from({ length: size }, (a, i) =>
      Array.from({ length: size }, (b, j) => (j <= i ? 1 : 0))
    );
  }

  onDropdownHandler(e: MouseEvent | KeyboardEvent) {
    const isMouseEvent = e instanceof MouseEvent;
    const isKeyboardEvent = e instanceof KeyboardEvent;

    if (isMouseEvent) {
      e.stopPropagation();
    }

    if (isKeyboardEvent) {
      e.preventDefault();
      if (e.code !== "Enter" && e.code !== "Space") return;
    }

    this.isDropdownOpened = !this.isDropdownOpened;
  }

  private onClickOutsideHandler(e: MouseEvent) {
    if (this.dropdown) {
      const isClickInsideDropdown = this.dropdown.nativeElement.contains(e.target);
      if (!isClickInsideDropdown) {
        this.isDropdownOpened = false;
      }
    }
  }

  onSelectSortTypeHandler(e: SortParameters) {
    this.store.dispatch(setSortType({ sortType: e }));
  }

  onSelectCategoryHandler(category: Categories, e?: KeyboardEvent) {
    if (e && e.code !== "Enter" && e.code !== "Space") return;
    this.store.dispatch(setCategory({ category }))
  }

  onSelectGenreHandler(genre: string) {
    this.store.dispatch(setGenre({ genre }))
  }

  onSelectRatingHandler(rating: number) {
    this.store.dispatch(setRating({ rating: rating + 1}))
  }

  onResetFiltersHandler() {
    this.store.dispatch(resetFilters());
  }

  ngOnDestroy() {
    document.removeEventListener("click", this.onClickOutsideHandler.bind(this));
  }
}
