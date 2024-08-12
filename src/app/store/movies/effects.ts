import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { MovieService } from "@services/movie/movie.service";
import * as filtersActions from "@store/filters/actions";
import { selectQueryAndPage } from "@store/filters/selectors";
import { AppState} from "@store/index";
import {
  favoriteMoviesActions,
  movieDetailsActions,
  nowPlayingMoviesActions,
  popularMoviesActions,
  searchedMoviesActions,
  topRatedMoviesActions,
  upcomingMoviesActions,
  watchLaterActions,
} from "@store/movies/actions";
import { forkJoin, mergeMap, of, switchMap } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private movieService: MovieService,
    private store: Store<AppState>,
    private router: Router,
  ) {}

  loadNowPlayingMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(nowPlayingMoviesActions.load),
      switchMap(() => {
        return this.store.select(selectQueryAndPage).pipe(
          switchMap(({ page }) => {
            return this.movieService.getNowPlayingMovies(page).pipe(
              switchMap(response => [
                nowPlayingMoviesActions.loadSuccess({ movies: response.results }),
                filtersActions.setTotalPages({ pages: response.total_pages > 500 ? 500 : response.total_pages })
              ]),
              catchError(error => of(nowPlayingMoviesActions.loadFailure({ error: error.message })))
            );
          })
        );
      })
    );
  });

  loadPopularMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(popularMoviesActions.load),
      switchMap(() => {
        return this.store.select(selectQueryAndPage).pipe(
          switchMap(({ page }) => {
            return this.movieService.getPopularMovies(page).pipe(
              switchMap(response => [
                popularMoviesActions.loadSuccess({ movies: response.results }),
                filtersActions.setTotalPages({ pages: response.total_pages > 500 ? 500 : response.total_pages })
              ]),
              catchError(error => of(popularMoviesActions.loadFailure({ error: error.message })))
            );
          })
        );
      })
    );
  });

  loadTopRatedMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(topRatedMoviesActions.load),
      switchMap(() => {
        return this.store.select(selectQueryAndPage).pipe(
          switchMap(({ page }) => {
            return this.movieService.getTopRatedMovies(page).pipe(
              switchMap(response => [
                topRatedMoviesActions.loadSuccess({ movies: response.results }),
                filtersActions.setTotalPages({ pages: response.total_pages > 500 ? 500 : response.total_pages })
              ]),
              catchError(error => of(topRatedMoviesActions.loadFailure({ error: error.message })))
            );
          })
        );
      })
    );
  });

  loadUpcomingMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(upcomingMoviesActions.load),
      switchMap(() => {
        return this.store.select(selectQueryAndPage).pipe(
          switchMap(({ page }) => {
            return this.movieService.getUpcomingMovies(page).pipe(
              switchMap(response => [
                upcomingMoviesActions.loadSuccess({ movies: response.results }),
                filtersActions.setTotalPages({ pages: response.total_pages > 500 ? 500 : response.total_pages })
              ]),
              catchError(error => of(upcomingMoviesActions.loadFailure({ error: error.message })))
            );
          })
        );
      })
    );
  });

  loadFavoriteMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(favoriteMoviesActions.load),
      switchMap(() => {
        return this.store.select(selectQueryAndPage).pipe(
          switchMap(({ page }) => {
            return this.movieService.getFavoritesMovies(page).pipe(
              switchMap(response => {
                const movieIds = response.results.map(movie => movie.id);

                return forkJoin([
                  of(favoriteMoviesActions.loadSuccess({ movies: response.results })),
                  of(favoriteMoviesActions.setFavoriteMovieIds({ movieIds })),
                  of(filtersActions.setTotalPages({ pages: response.total_pages > 500 ? 500 : response.total_pages })),
                ]);
              }),
              mergeMap(actions => actions),
              catchError(error => of(favoriteMoviesActions.loadFailure({ error: error.message })))
            );
          })
        );
      })
    );
  });

  loadWatchLaterMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(watchLaterActions.load),
      switchMap(() => {
        return this.store.select(selectQueryAndPage).pipe(
          switchMap(({ page }) => {
            return this.movieService.getWatchLaterMovies(page).pipe(
              switchMap(response => {
                const movieIds = response.results.map(movie => movie.id);

                return forkJoin([
                  of(watchLaterActions.loadSuccess({ movies: response.results })),
                  of(watchLaterActions.setWatchLaterMovieIds({ movieIds })),
                  of(filtersActions.setTotalPages({ pages: response.total_pages > 500 ? 500 : response.total_pages })),
                ]);
              }),
              mergeMap(actions => actions),
              catchError(error => of(watchLaterActions.loadFailure({ error: error.message })))
            );
          })
        );
      })
    );
  });

  updateFavoriteMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(favoriteMoviesActions.update),
      switchMap(action =>
        this.movieService.updateList("favorite", action.movieId).pipe(
          switchMap(() => {
            return forkJoin([
              of(favoriteMoviesActions.updateSuccess({ movieId: action.movieId })),
              of(favoriteMoviesActions.load())
            ]);
          }),
          mergeMap(actions => actions),
          catchError(error => of(favoriteMoviesActions.updateFailure({ error: error.message })))
        )
      ),
    );
  });

  updateWatchLaterMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(watchLaterActions.update),
      switchMap(action =>
        this.movieService.updateList("watchlist", action.movieId).pipe(
          switchMap(() => {
            return forkJoin([
              of(watchLaterActions.updateSuccess({ movieId: action.movieId })),
              of(watchLaterActions.load())
            ]);
          }),
          mergeMap(actions => actions),
          catchError(error => of(watchLaterActions.updateFailure({ error: error.message })))
        )
      ),
    );
  });

  loadMovieDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(movieDetailsActions.load),
      switchMap(({ movieId }) => {
        return this.movieService.getMovieById(movieId).pipe(
          map(movie => movieDetailsActions.loadSuccess({ movie })),
          catchError(error => of(movieDetailsActions.loadFailure({ error: error.message })))
        );
      })
    );
  });

  private loadMoviesBasedOnRoute(url: string): Action[] {
    type MoviesActionKeys = "now-playing" | "popular" | "upcoming" | "top-rated" | "searched";

    const moviesActions: Record<MoviesActionKeys, Action> = {
      "now-playing": nowPlayingMoviesActions.load(),
      "popular": popularMoviesActions.load(),
      "upcoming": upcomingMoviesActions.load(),
      "top-rated": topRatedMoviesActions.load(),
      "searched": searchedMoviesActions.load(),
    };

    const actions: Action[] = [];

    (Object.keys(moviesActions) as MoviesActionKeys[]).forEach(key => {
      if (url.includes(key)) {
        actions.push(moviesActions[key] ?? moviesActions["searched"]);
      }
    });

    return actions;
  }

  loadSearchedMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(filtersActions.setQuery),
      switchMap(() => {
        return this.store.select(selectQueryAndPage).pipe(
          switchMap(({ query, page }) => {
            return this.movieService.getMoviesByName(query, page).pipe(
              map(response => {
                const url = this.router.url;

                return [
                  searchedMoviesActions.loadSuccess({ movies: response.results }),
                  filtersActions.setTotalPages({ pages: response.total_pages > 500 ? 500 : response.total_pages }),
                  ...this.loadMoviesBasedOnRoute(url)
                ];
              }),
              mergeMap(actions => actions),
              catchError(error => of(searchedMoviesActions.loadFailure({ error: error.message })))
            );
          })
        );
      })
    );
  });

}
