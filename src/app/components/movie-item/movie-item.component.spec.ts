import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { movies } from "@constants/movies";
import { Movie } from "@models/movie.interface";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { TruncateDescriptionPipe } from "@pipes/truncate-description/truncate-description.pipe";
import { AppState } from "@store/index";
import { favoriteMoviesActions, watchLaterActions } from "@store/movies/actions";
import { selectIsMovieInWatchLater, selectIsMovieLiked } from "@store/movies/selectors";
import { provideAngularSvgIcon, SvgIconComponent } from "angular-svg-icon";
import { of } from "rxjs";

import { MovieItemComponent } from "./movie-item.component";

describe("MovieItemComponent", () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;
  let store: MockStore<AppState>;
  let router: Router;

  const mockMovie: Movie = movies[0];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MovieItemComponent,
        SvgIconComponent,
        TruncateDescriptionPipe
      ],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectIsMovieLiked(mockMovie.id), value: of(true) },
            { selector: selectIsMovieInWatchLater(mockMovie.id), value: of(false) },
          ],
        }),
        { provide: Router, useValue: { navigate: jest.fn() } },
        provideAngularSvgIcon(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieItemComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    component.item = mockMovie;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize correctly in ngOnInit", () => {
    component.ngOnInit();
    expect(component.imageUrl).toBe(`${component.baseImageUrl}/${mockMovie.backdrop_path}`);
    expect(component.genres).toEqual(["sci-fi", "action", "adventure"]);
    expect(component.rating).toEqual([1, 1, 1, 1, 0]);
    expect(component.movieId).toBe("/movie/823464");
    component.liked$.subscribe(liked => expect(liked).toBe(true));
    component.watchedLater$.subscribe(watchedLater => expect(watchedLater).toBe(false));
  });

  it("should dispatch favoriteMoviesActions.update on onAddToFavorites", () => {
    const dispatchSpy = jest.spyOn(store, "dispatch");
    const event = new Event("click");
    jest.spyOn(event, "stopPropagation");
    component.onAddToFavorites(mockMovie.id, event);
    expect(event.stopPropagation).toHaveBeenCalled();
    expect(dispatchSpy).toHaveBeenCalledWith(favoriteMoviesActions.update({ movieId: mockMovie.id }));
  });

  it("should dispatch watchLaterActions.update on onAddToWatchLater", () => {
    const dispatchSpy = jest.spyOn(store, "dispatch");
    const event = new Event("click");
    jest.spyOn(event, "stopPropagation");
    component.onAddToWatchLater(mockMovie.id, event);
    expect(event.stopPropagation).toHaveBeenCalled();
    expect(dispatchSpy).toHaveBeenCalledWith(watchLaterActions.update({ movieId: mockMovie.id }));
  });

  it("should navigate to movie details on navigateToMovieDetails", () => {
    const navigateSpy = jest.spyOn(router, "navigate");
    component.navigateToMovieDetails();
    expect(navigateSpy).toHaveBeenCalledWith([component.movieId]);
  });
});
