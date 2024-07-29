import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MovieService } from "@services/movie/movie.service";
import {
  favoriteMoviesActions, movieDetailsActions,
  nowPlayingMoviesActions,
  popularMoviesActions,
  topRatedMoviesActions,
  upcomingMoviesActions,
  watchLaterActions,
} from "@store/movies/actions";
import { of, switchMap } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {}

  loadNowPlayingMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(nowPlayingMoviesActions.load),
      switchMap(() => {
        return this.movieService.getNowPlayingMovies().pipe(
          map(movies => nowPlayingMoviesActions.loadSuccess({ movies })),
          catchError(error => of(nowPlayingMoviesActions.loadFailure({ error: error.message })))
        );
      })
    );
  });

  loadPopularMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(popularMoviesActions.load),
      switchMap(() => {
        return this.movieService.getPopularMovies().pipe(
          map(movies => popularMoviesActions.loadSuccess({ movies })),
          catchError(error => of(popularMoviesActions.loadFailure({ error: error.message })))
        );
      })
    );
  });

  loadTopRatedMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(topRatedMoviesActions.load),
      switchMap(() => {
        return this.movieService.getTopRatedMovies().pipe(
          map(movies => topRatedMoviesActions.loadSuccess({ movies })),
          catchError(error => of(topRatedMoviesActions.loadFailure({ error: error.message })))
        );
      })
    );
  });

  loadUpcomingMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(upcomingMoviesActions.load),
      switchMap(() => {
        return this.movieService.getUpcomingMovies().pipe(
          map(movies => upcomingMoviesActions.loadSuccess({ movies })),
          catchError(error => of(upcomingMoviesActions.loadFailure({ error: error.message })))
        );
      })
    );
  });

  loadFavoriteMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(favoriteMoviesActions.load),
      switchMap(() => {
        return this.movieService.getFavoritesMovies().pipe(
          map(movies => {
            const movieIds = movies.map(movie => movie.id);

            return [
              favoriteMoviesActions.loadSuccess({ movies }),
              favoriteMoviesActions.setFavoriteMovieIds({ movieIds }),
            ];
          }),
          switchMap(actions => actions),
          catchError(error => of(favoriteMoviesActions.loadFailure({ error: error.message })))
        );
      })
    );
  });

  loadWatchLaterMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(watchLaterActions.load),
      switchMap(() => {
        return this.movieService.getWatchLaterMovies().pipe(
          map(movies => {
            const movieIds = movies.map(movie => movie.id);

            return [
              watchLaterActions.loadSuccess({ movies }),
              watchLaterActions.setWatchLaterMovieIds({ movieIds }),
            ];
          }),
          switchMap(actions => actions),
          catchError(error => of(watchLaterActions.loadFailure({ error: error.message })))
        );
      })
    );
  });

  updateFavoriteMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(favoriteMoviesActions.update),
      switchMap(action =>
        this.movieService.updateList("favorite", action.movieId).pipe(
          map(() => favoriteMoviesActions.updateSuccess({ movieId: action.movieId })),
          catchError(error => of(favoriteMoviesActions.updateFailure({ error: error.message })))
        )
      )
    );
  });

  updateWatchLaterMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(watchLaterActions.update),
      switchMap(action =>
        this.movieService.updateList("watchlist", action.movieId).pipe(
          map(() => watchLaterActions.updateSuccess({ movieId: action.movieId })),
          catchError(error => of(watchLaterActions.updateFailure({ error: error.message })))
        )
      )
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

}
