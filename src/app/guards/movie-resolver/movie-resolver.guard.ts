import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { MovieDetails } from "@models/movie-details.interface";
import { Store } from "@ngrx/store";
import { movieDetailsActions } from "@store/movies/actions";
import { selectMovieDetails } from "@store/movies/selectors";
import { take } from "rxjs/operators";

export const movieResolverGuard: ResolveFn<MovieDetails | null> = (route) => {
  const store = inject(Store);
  const movieId = Number(route.paramMap.get("id"));

  if (movieId) {
    store.dispatch(movieDetailsActions.load({ movieId }));
    return store.select(selectMovieDetails).pipe(take(1));
  }

  return null;
};
