import { AsyncPipe, NgClass } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Movie } from "@models/movie.interface";
import { Store } from "@ngrx/store";
import { setNextPage, setPage } from "@store/filters/actions";
import { selectPage, selectTotalPages } from "@store/filters/selectors";
import { AppState } from "@store/index";
import {
  selectFilteredMovies,
  selectNowPlayingMovies,
  selectPopularMovies,
  selectTopRatedMovies,
  selectUpcomingMovies,
} from "@store/movies/selectors";
import { SvgIconComponent } from "angular-svg-icon";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-pagination",
  standalone: true,
  imports: [SvgIconComponent, NgClass, AsyncPipe],
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
  movies$: Observable<Movie[]>;
  selectedPage$: Observable<number>;
  totalPages$: Observable<number>;
  selectedPage = 1;
  totalPages = 1;

  private moviesSelectors = {
    "now-playing": selectNowPlayingMovies,
    popular: selectPopularMovies,
    upcoming: selectUpcomingMovies,
    "top-rated": selectTopRatedMovies,
    filtered: selectFilteredMovies,
  };

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.movies$ = this.store.select(selectFilteredMovies);
    this.selectedPage$ = this.store.select(selectPage);
    this.totalPages$ = this.store.select(selectTotalPages);
  }

  ngOnInit() {
    this.route.url
      .pipe(
        switchMap((segments) => {
          const currentRoute = segments[0]?.path as keyof typeof this.moviesSelectors;
          this.selectMovies(this.moviesSelectors[currentRoute] ? currentRoute : "filtered");

          return this.selectedPage$;
        })
      )
      .subscribe();

    this.totalPages$.subscribe((pages) => (this.totalPages = pages));
    this.selectedPage$.subscribe((page) => (this.selectedPage = page));
  }

  selectMovies(key: keyof typeof this.moviesSelectors) {
    this.movies$ = this.store.select(this.moviesSelectors[key]);
  }

  onSelectPageHandler(page: number, e?: KeyboardEvent) {
    if (e && e.code !== "Enter" && e.code !== "Space") return;
    this.store.dispatch(setPage({ page }));
    this.scrollToTop();
  }

  onShowMoreHandler() {
    this.store.dispatch(setNextPage());
    this.scrollToTop();
  }

  getDisplayedPages(): number[] {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (this.totalPages <= maxPagesToShow) {
      for (let i = 1; i <= this.totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (this.selectedPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(-1, this.totalPages);
      } else if (this.selectedPage > this.totalPages - 3) {
        pageNumbers.push(1, -1);
        for (let i = this.totalPages - 3; i <= this.totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1, -1);
        for (let i = this.selectedPage - 1; i <= this.selectedPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(-1, this.totalPages);
      }
    }

    return pageNumbers;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
