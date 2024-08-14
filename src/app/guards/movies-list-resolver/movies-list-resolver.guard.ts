import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { RoutePaths } from "@models/route-paths.enum";
import { Store } from "@ngrx/store";
import * as moviesActions from "@store/movies/actions";
import { Observable, of } from "rxjs";

export const moviesListResolverGuard: ResolveFn<Observable<void>> = (route) => {
  const store = inject(Store);
  const listType = route.url[0].path;

  switch (listType) {
    case RoutePaths.POPULAR:
      store.dispatch(moviesActions.popularMoviesActions.load());
      return of(undefined);
    case RoutePaths.UPCOMING:
      store.dispatch(moviesActions.upcomingMoviesActions.load());
      return of(undefined);
    case RoutePaths.TOP_RATE:
      store.dispatch(moviesActions.topRatedMoviesActions.load());
      return of(undefined);
    case RoutePaths.NOW_PLAYING:
      store.dispatch(moviesActions.nowPlayingMoviesActions.load());
      return of(undefined);
    default:
      return of(undefined);
  }
};
