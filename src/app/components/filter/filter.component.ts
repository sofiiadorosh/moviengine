import { AsyncPipe, NgClass } from "@angular/common";
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { genreIds } from "@constants/genre-ids";
import { sortParameters } from "@constants/sort-parameters";
import { SortParameters } from "@models/sort-parameters.enum";
import { Store } from "@ngrx/store";
import { DropdownComponent } from "@shared/dropdown/dropdown.component";
import { resetFilters, setGenre, setRating, setSortType } from "@store/filters/actions";
import { selectGenres, selectRating, selectSortType } from "@store/filters/selectors";
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
  styleUrl: "./filter.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit, OnDestroy {
  protected readonly sortParameters = sortParameters;
  protected readonly genres = Object.values(genreIds);
  ratingList: number[][] = this.generateArrays(5);
  sortType$: Observable<SortParameters>;
  genres$: Observable<string[]>;
  rating$: Observable<number[]>;
  isDropdownOpened = false;

  @ViewChild("dropdown") dropdown!: ElementRef;

  constructor(private store: Store<AppState>) {
    this.sortType$ = this.store.select(selectSortType);
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
