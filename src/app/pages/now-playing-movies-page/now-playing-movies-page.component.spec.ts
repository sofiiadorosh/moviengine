import { provideHttpClient } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { movies } from "@constants/movies";
import { Movie } from "@models/movie.interface";
import { MemoizedSelector } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { AppState } from "@store/index";
import { selectIsLoading, selectNowPlayingMovies } from "@store/movies/selectors";
import { provideAngularSvgIcon } from "angular-svg-icon";

import { NowPlayingMoviesPageComponent } from "./now-playing-movies-page.component";

describe("NowPlayingMoviesPageComponent", () => {
  let component: NowPlayingMoviesPageComponent;
  let fixture: ComponentFixture<NowPlayingMoviesPageComponent>;
  let store: MockStore<AppState>;
  let selectMockNowPlayingMovies: MemoizedSelector<AppState, Movie[]>;
  let selectMockIsLoading: MemoizedSelector<AppState, boolean>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowPlayingMoviesPageComponent],
      providers: [
        provideMockStore(),
        provideHttpClient(),
        provideAngularSvgIcon(),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    selectMockNowPlayingMovies = store.overrideSelector(selectNowPlayingMovies, []);
    selectMockIsLoading = store.overrideSelector(selectIsLoading, false);

    fixture = TestBed.createComponent(NowPlayingMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should select now playing movies from the store", () => {
    const mockMovies: Movie[] = movies;
    selectMockNowPlayingMovies.setResult(mockMovies);
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
