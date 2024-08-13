import { TestBed } from "@angular/core/testing";
import { movieDetails } from "@constants/movie-details";
import { movies } from "@constants/movies";
import { provideMockActions } from "@ngrx/effects/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { MovieService } from "@services/movie/movie.service";
import {
  movieDetailsActions,
  nowPlayingMoviesActions,
  popularMoviesActions,
} from "@store/movies/actions";
import { of, ReplaySubject, throwError } from "rxjs";

import { MoviesEffects } from "./effects";

describe("MoviesEffects", () => {
  let effects: MoviesEffects;
  let actions$: ReplaySubject<ReturnType<typeof nowPlayingMoviesActions.load |
    typeof popularMoviesActions.load |
    typeof movieDetailsActions.load>>;
  let movieService: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MoviesEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        {
          provide: MovieService,
          useValue: {
            getNowPlayingMovies: jest.fn(),
            getPopularMovies: jest.fn(),
            getTopRatedMovies: jest.fn(),
            getUpcomingMovies: jest.fn(),
            getFavoritesMovies: jest.fn(),
            getWatchLaterMovies: jest.fn(),
            getMovieById: jest.fn(),
            updateList: jest.fn(),
          }
        }
      ]
    });

    effects = TestBed.inject(MoviesEffects);
    movieService = TestBed.inject(MovieService);
    actions$ = new ReplaySubject(1);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });

  it("should return loadNowPlayingMovies success action on success", (done) => {
    const mockMovies = movies;
    actions$.next(nowPlayingMoviesActions.load());
    movieService.getNowPlayingMovies = jest.fn(() => of(mockMovies));

    effects.loadNowPlayingMovies$.subscribe(result => {
      expect(result).toEqual(nowPlayingMoviesActions.loadSuccess({ movies: mockMovies }));
      done();
    });
  });

  it("should return loadNowPlayingMovies failure action on error", (done) => {
    const error = new Error("Failed to load now playing movies");
    actions$.next(nowPlayingMoviesActions.load());
    movieService.getNowPlayingMovies = jest.fn(() => throwError(error));

    effects.loadNowPlayingMovies$.subscribe(result => {
      expect(result).toEqual(nowPlayingMoviesActions.loadFailure({ error: error.message }));
      done();
    });
  });

  it("should return loadPopularMovies success action on success", (done) => {
    const mockMovies = movies;
    actions$.next(popularMoviesActions.load());
    movieService.getPopularMovies = jest.fn(() => of(mockMovies));

    effects.loadPopularMovies$.subscribe(result => {
      expect(result).toEqual(popularMoviesActions.loadSuccess({ movies: mockMovies }));
      done();
    });
  });

  it("should return loadPopularMovies failure action on error", (done) => {
    const error = new Error("Failed to load popular movies");
    actions$.next(popularMoviesActions.load());
    movieService.getPopularMovies = jest.fn(() => throwError(error));

    effects.loadPopularMovies$.subscribe(result => {
      expect(result).toEqual(popularMoviesActions.loadFailure({ error: error.message }));
      done();
    });
  });

  it("should return loadMovieDetails success action on success", (done) => {
    const mockMovie = movieDetails;
    actions$.next(movieDetailsActions.load({ movieId: 573435 }));
    movieService.getMovieById = jest.fn(() => of(mockMovie));

    effects.loadMovieDetails$.subscribe(result => {
      expect(result).toEqual(movieDetailsActions.loadSuccess({ movie: mockMovie }));
      done();
    });
  });

  it("should return loadMovieDetails failure action on error", (done) => {
    const error = new Error("Failed to load movie details");
    actions$.next(movieDetailsActions.load({ movieId: 573435 }));
    movieService.getMovieById = jest.fn(() => throwError(error));

    effects.loadMovieDetails$.subscribe(result => {
      expect(result).toEqual(movieDetailsActions.loadFailure({ error: error.message }));
      done();
    });
  });
});
