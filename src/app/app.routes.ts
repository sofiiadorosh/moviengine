import {Routes} from "@angular/router";
import {RoutePaths} from "@models/route-paths.enum";
import {FavoritesPageComponent} from "@pages/favorites-page/favorites-page.component";
import {HomePageComponent} from "@pages/home-page/home-page.component";
import {MovieDetailsPageComponent} from "@pages/movie-details-page/movie-details-page.component";
import {NotFoundPageComponent} from "@pages/not-found-page/not-found-page.component";
import {NowPlayingMoviesPageComponent} from "@pages/now-playing-movies-page/now-playing-movies-page.component";
import {PopularMoviesPageComponent} from "@pages/popular-movies-page/popular-movies-page.component";
import {TopRateMoviesPageComponent} from "@pages/top-rate-movies-page/top-rate-movies-page.component";
import {UpcomingMoviesPageComponent} from "@pages/upcoming-movies-page/upcoming-movies-page.component";
import {WatchLaterPageComponent} from "@pages/watch-later-page/watch-later-page.component";

export const routes: Routes = [
  { path: RoutePaths.DEFAULT, component: HomePageComponent },
  { path: RoutePaths.NOW_PLAYING, component: NowPlayingMoviesPageComponent },
  { path: RoutePaths.POPULAR, component: PopularMoviesPageComponent },
  { path: RoutePaths.TOP_RATE, component: TopRateMoviesPageComponent },
  { path: RoutePaths.UPCOMING, component: UpcomingMoviesPageComponent },
  { path: RoutePaths.FAVORITES, component: FavoritesPageComponent },
  { path: RoutePaths.WATCH_LATER, component: WatchLaterPageComponent },
  { path: RoutePaths.MOVIE_ID, component: MovieDetailsPageComponent },
  { path: RoutePaths.NOT_FOUND, component: NotFoundPageComponent },
];
