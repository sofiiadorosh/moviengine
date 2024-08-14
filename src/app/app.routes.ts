import { Routes } from "@angular/router";
import { isAuthorizedGuard } from "@guards/is-authorized/is-authorized.guard";
import { loginRedirectGuard } from "@guards/login-redirect/login-redirect.guard";
import { movieResolverGuard } from "@guards/movie-resolver/movie-resolver.guard";
import { moviesListResolverGuard } from "@guards/movies-list-resolver/movies-list-resolver.guard";
import { RoutePaths } from "@models/route-paths.enum";
import { LayoutComponent } from "@shared/layout/layout.component";

export const routes: Routes = [
  {
    path: RoutePaths.DEFAULT,
    component: LayoutComponent,
    children: [
      {
        path: RoutePaths.DEFAULT,
        loadComponent: () =>
          import("@pages/home-page/home-page.component")
            .then(component => component.HomePageComponent)
      },
      {
        path: RoutePaths.NOW_PLAYING,
        resolve: {
          movies: moviesListResolverGuard,
        },
        loadComponent: () =>
          import("@pages/now-playing-movies-page/now-playing-movies-page.component")
            .then(component => component.NowPlayingMoviesPageComponent)
      },
      {
        path: RoutePaths.POPULAR,
        resolve: {
          movies: moviesListResolverGuard,
        },
        loadComponent: () =>
          import("@pages/popular-movies-page/popular-movies-page.component")
            .then(component => component.PopularMoviesPageComponent)
      },
      {
        path: RoutePaths.TOP_RATE,
        resolve: {
          movies: moviesListResolverGuard,
        },
        loadComponent: () =>
          import("@pages/top-rate-movies-page/top-rate-movies-page.component")
            .then(component => component.TopRateMoviesPageComponent)
      },
      {
        path: RoutePaths.UPCOMING,
        resolve: {
          movies: moviesListResolverGuard,
        },
        loadComponent: () =>
          import("@pages/upcoming-movies-page/upcoming-movies-page.component")
            .then(component => component.UpcomingMoviesPageComponent)
      },
      {
        path: RoutePaths.FAVORITES,
        loadComponent: () =>
          import("@pages/favorites-page/favorites-page.component")
            .then(component => component.FavoritesPageComponent),
        canActivate: [isAuthorizedGuard]
      },
      {
        path: RoutePaths.WATCH_LATER,
        loadComponent: () =>
          import("@pages/watch-later-page/watch-later-page.component")
            .then(component => component.WatchLaterPageComponent),
        canActivate: [isAuthorizedGuard]
      },
      {
        path: RoutePaths.MOVIE_ID,
        resolve: {
          movie: movieResolverGuard,
        },

        loadComponent: () =>
          import("@pages/movie-details-page/movie-details-page.component")
            .then(component => component.MovieDetailsPageComponent)
      },
      {
        path: RoutePaths.SEARCH,
        loadComponent: () =>
          import("@pages/search-page/search-page.component")
            .then(component => component.SearchPageComponent)
      },
      {
        path: RoutePaths.SUBSCRIPTION,
        loadComponent: () =>
          import("@pages/subscription-page/subscription-page.component")
            .then(component => component.SubscriptionPageComponent),
        canActivate: [isAuthorizedGuard]
      },
    ]
  },
  {
    path: RoutePaths.AUTH,
    loadComponent: () =>
      import("@pages/login-page/login-page.component")
        .then(component => component.LoginPageComponent),
    canActivate: [loginRedirectGuard]
  },
  {
    path: RoutePaths.NOT_FOUND,
    loadComponent: () =>
      import("@pages/not-found-page/not-found-page.component")
        .then(component => component.NotFoundPageComponent)
  },
];
