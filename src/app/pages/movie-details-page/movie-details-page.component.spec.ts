import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { movieDetails } from "@constants/movie-details";
import { MovieDetails } from "@models/movie-details.interface";
import { Store } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { LoaderComponent } from "@shared/loader/loader.component";
import { AppState } from "@store/index";
import {
  favoriteMoviesActions,
  movieDetailsActions,
  watchLaterActions,
} from "@store/movies/actions";
import {
  selectIsLoading,
  selectIsMovieInWatchLater,
  selectIsMovieLiked,
  selectMovieDetails,
} from "@store/movies/selectors";
import { SvgIconComponent } from "angular-svg-icon";
import { of } from "rxjs";

import { MovieDetailsPageComponent } from "./movie-details-page.component";

describe("MovieDetailsPageComponent", () => {
  let component: MovieDetailsPageComponent;
  let fixture: ComponentFixture<MovieDetailsPageComponent>;
  let store: MockStore<AppState>;

  const mockMovieDetails: MovieDetails = movieDetails;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SvgIconComponent,
        LoaderComponent,
        MovieDetailsPageComponent,
      ],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectMovieDetails, value: of(mockMovieDetails) },
            { selector: selectIsLoading, value: of(false) },
            { selector: selectIsMovieLiked(1), value: of(true) },
            { selector: selectIsMovieInWatchLater(1), value: of(false) },
          ],
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: () => "1",
            }),
          },
        },
      ],
    }).compileComponents();

    store = TestBed.inject(Store) as MockStore<AppState>;
    fixture = TestBed.createComponent(MovieDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize correctly in ngOnInit", () => {
    component.ngOnInit();

    expect(component.isLoading$).toBeTruthy();
    expect(component.liked$).toBeTruthy();
    expect(component.watchedLater$).toBeTruthy();

    component.movie$.subscribe((movie) => {
      expect(movie).toEqual(mockMovieDetails);
      if (movie) {
        expect(component.imageUrl).toBe(`${component.baseImageUrl}${movie.poster_path}`);
        expect(component.backdropUrl).toBe(`${component.baseImageUrl}${movie.backdrop_path}`);
        expect(component.rating).toEqual([1, 1, 1, 1, 1]);
      }
    });
  });

  it("should dispatch movieDetailsActions.load on ngOnInit", () => {
    const dispatchSpy = jest.spyOn(store, "dispatch");
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(movieDetailsActions.load({ movieId: 1 }));
  });

  it("should dispatch favoriteMoviesActions.update on onAddToFavorites", () => {
    const dispatchSpy = jest.spyOn(store, "dispatch");
    component.onAddToFavorites(1);
    expect(dispatchSpy).toHaveBeenCalledWith(favoriteMoviesActions.update({ movieId: 1 }));
  });

  it("should dispatch watchLaterActions.update on onAddToWatchLater", () => {
    const dispatchSpy = jest.spyOn(store, "dispatch");
    component.onAddToWatchLater(1);
    expect(dispatchSpy).toHaveBeenCalledWith(watchLaterActions.update({ movieId: 1 }));
  });
});
