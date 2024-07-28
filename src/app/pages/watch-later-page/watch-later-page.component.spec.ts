import { provideHttpClient } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { movies } from "@constants/movies";
import { Movie } from "@models/movie.interface";
import { MemoizedSelector } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { AppState } from "@store/index";
import { selectIsLoading, selectWatchLaterMovies } from "@store/movies/selectors";
import { provideAngularSvgIcon } from "angular-svg-icon";

import { WatchLaterPageComponent } from "./watch-later-page.component";

describe("WatchLaterPageComponent", () => {
  let component: WatchLaterPageComponent;
  let fixture: ComponentFixture<WatchLaterPageComponent>;
  let store: MockStore;
  let selectMockWatchLaterMovies: MemoizedSelector<AppState, Movie[]>;
  let selectMockIsLoading: MemoizedSelector<AppState, boolean>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WatchLaterPageComponent,
      ],
      providers: [
        provideMockStore(),
        provideHttpClient(),
        provideAngularSvgIcon(),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    selectMockWatchLaterMovies = store.overrideSelector(selectWatchLaterMovies, []);
    selectMockIsLoading = store.overrideSelector(selectIsLoading, false);

    fixture = TestBed.createComponent(WatchLaterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should select watch later movies from the store", () => {
    const mockMovies: Movie[] = movies;
    selectMockWatchLaterMovies.setResult(mockMovies);
    store.refreshState();

    fixture.detectChanges();

    component.movies$.subscribe(items => {
      expect(items).toEqual(mockMovies);
    });
  });

  it("should select isLoading from the store", () => {
    const mockIsLoading = true;
    selectMockIsLoading.setResult(mockIsLoading);
    store.refreshState();

    fixture.detectChanges();

    component.isLoading$.subscribe(isLoading => {
      expect(isLoading).toBe(mockIsLoading);
    });
  });
});
