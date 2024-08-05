import { Routes } from "@angular/router";
import { isAuthorizedGuard } from "@guards/is-authorized/is-authorized.guard";
import { loginRedirectGuard } from "@guards/login-redirect/login-redirect.guard";
import { RoutePaths } from "@models/route-paths.enum";
import { FavoritesPageComponent } from "@pages/favorites-page/favorites-page.component";
import { HomePageComponent } from "@pages/home-page/home-page.component";
import { LoginPageComponent } from "@pages/login-page/login-page.component";
import { MovieDetailsPageComponent } from "@pages/movie-details-page/movie-details-page.component";
import { NotFoundPageComponent } from "@pages/not-found-page/not-found-page.component";
import { NowPlayingMoviesPageComponent } from "@pages/now-playing-movies-page/now-playing-movies-page.component";
import { PopularMoviesPageComponent } from "@pages/popular-movies-page/popular-movies-page.component";
import { SearchPageComponent } from "@pages/search-page/search-page.component";
import { SubscriptionPageComponent } from "@pages/subscription-page/subscription-page.component";
import { TopRateMoviesPageComponent } from "@pages/top-rate-movies-page/top-rate-movies-page.component";
import { UpcomingMoviesPageComponent } from "@pages/upcoming-movies-page/upcoming-movies-page.component";
import { WatchLaterPageComponent } from "@pages/watch-later-page/watch-later-page.component";
import { LayoutComponent } from "@shared/layout/layout.component";

export const routes: Routes = [
  { path: RoutePaths.DEFAULT, component: LayoutComponent,
    children: [
      { path: RoutePaths.DEFAULT, component: HomePageComponent },
      { path: RoutePaths.NOW_PLAYING, component: NowPlayingMoviesPageComponent },
      { path: RoutePaths.POPULAR, component: PopularMoviesPageComponent },
      { path: RoutePaths.TOP_RATE, component: TopRateMoviesPageComponent },
      { path: RoutePaths.UPCOMING, component: UpcomingMoviesPageComponent },
      { path: RoutePaths.FAVORITES, component: FavoritesPageComponent, canActivate: [isAuthorizedGuard] },
      { path: RoutePaths.WATCH_LATER, component: WatchLaterPageComponent, canActivate: [isAuthorizedGuard] },
      { path: RoutePaths.MOVIE_ID, component: MovieDetailsPageComponent },
      { path: RoutePaths.SEARCH, component: SearchPageComponent },
      { path: RoutePaths.SUBSCRIPTION, component: SubscriptionPageComponent },
    ]
  },
  { path: RoutePaths.AUTH, component: LoginPageComponent, canActivate: [loginRedirectGuard] },
  { path: RoutePaths.NOT_FOUND, component: NotFoundPageComponent },
];
