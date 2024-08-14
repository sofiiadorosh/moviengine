import { provideHttpClient } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { movies } from "@constants/movies";
import { Movie } from "@models/movie.interface";
import { MemoizedSelector } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { AppState } from "@store/index";
import { selectIsLoading, selectTopRatedMovies } from "@store/movies/selectors";
import { provideAngularSvgIcon } from "angular-svg-icon";

import { TopRateMoviesPageComponent } from "./top-rate-movies-page.component";

describe("TopRateMoviesPageComponent", () => {
  let component: TopRateMoviesPageComponent;
  let fixture: ComponentFixture<TopRateMoviesPageComponent>;
  let store: MockStore<AppState>;
  let selectMockTopRatedMovies: MemoizedSelector<AppState, Movie[]>;
  let selectMockIsLoading: MemoizedSelector<AppState, boolean>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRateMoviesPageComponent],
      providers: [
        provideMockStore(),
        provideHttpClient(),
        provideAngularSvgIcon(),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    selectMockTopRatedMovies = store.overrideSelector(selectTopRatedMovies, []);
    selectMockIsLoading = store.overrideSelector(selectIsLoading, false);

    fixture = TestBed.createComponent(TopRateMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should select top-rated movies from the store", () => {
    const mockMovies: Movie[] = movies;
    selectMockTopRatedMovies.setResult(mockMovies);
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
