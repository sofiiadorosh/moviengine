import { provideHttpClient } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { movies } from "@constants/movies";
import { Movie } from "@models/movie.interface";
import { MemoizedSelector } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { AppState } from "@store/index";
import { selectIsLoading, selectUpcomingMovies } from "@store/movies/selectors";
import { provideAngularSvgIcon } from "angular-svg-icon";

import { UpcomingMoviesPageComponent } from "./upcoming-movies-page.component";

describe("UpcomingMoviesPageComponent", () => {
  let component: UpcomingMoviesPageComponent;
  let fixture: ComponentFixture<UpcomingMoviesPageComponent>;
  let store: MockStore;
  let selectMockUpcomingMovies: MemoizedSelector<AppState, Movie[]>;
  let selectMockIsLoading: MemoizedSelector<AppState, boolean>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingMoviesPageComponent],
      providers: [
        provideMockStore(),
        provideHttpClient(),
        provideAngularSvgIcon(),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    selectMockUpcomingMovies = store.overrideSelector(selectUpcomingMovies, []);
    selectMockIsLoading = store.overrideSelector(selectIsLoading, false);

    fixture = TestBed.createComponent(UpcomingMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should select upcoming movies from the store", () => {
    const mockMovies: Movie[] = movies;
    selectMockUpcomingMovies.setResult(mockMovies);
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
