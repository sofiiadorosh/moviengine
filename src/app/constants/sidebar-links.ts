import { Route } from "@models/route.interface";
import { RoutePaths } from "@models/route-paths.enum";

export const sidebarLinks: Route[] = [
  { routeName: "Now playing", routePath: RoutePaths.NOW_PLAYING, routeIcon: "now-playing" },
  { routeName: "Popular", routePath: RoutePaths.POPULAR, routeIcon: "popular" },
  { routeName: "Top rate", routePath: RoutePaths.TOP_RATE, routeIcon: "top-rated" },
  { routeName: "Upcoming", routePath: RoutePaths.UPCOMING, routeIcon: "upcoming" },
  { routeName: "Subscribe", routePath: RoutePaths.SUBSCRIPTION, routeIcon: "subscribe" },
]
