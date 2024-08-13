import { provideHttpClient } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { movies } from "@constants/movies";
import { Movie } from "@models/movie.interface";
import { MemoizedSelector } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { AppState } from "@store/index";
import { selectFavoriteMovies, selectIsLoading } from "@store/movies/selectors";
import { provideAngularSvgIcon } from "angular-svg-icon";

import { FavoritesPageComponent } from "./favorites-page.component";

describe("FavoritesPageComponent", () => {
  let component: FavoritesPageComponent;
  let fixture: ComponentFixture<FavoritesPageComponent>;
  let store: MockStore<AppState>;
  let selectMockFavoriteMovies: MemoizedSelector<AppState, Movie[]>;
  let selectMockIsLoading: MemoizedSelector<AppState, boolean>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FavoritesPageComponent,
      ],
      providers: [
        provideMockStore(),
        provideHttpClient(),
        provideAngularSvgIcon(),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    selectMockFavoriteMovies = store.overrideSelector(selectFavoriteMovies, []);
    selectMockIsLoading = store.overrideSelector(selectIsLoading, false);

    fixture = TestBed.createComponent(FavoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should select favorite movies from the store", () => {
    const mockMovies: Movie[] = movies;
    selectMockFavoriteMovies.setResult(mockMovies);
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