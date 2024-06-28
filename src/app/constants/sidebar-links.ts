import { RoutePaths } from "@models/route-paths.enum";
import { Route } from "@models/route.interface";

export const sidebarLinks: Route[] = [
  { routeName: "Now playing", routePath: RoutePaths.NOW_PLAYING },
  { routeName: "Popular", routePath: RoutePaths.POPULAR },
  { routeName: "Top rate", routePath: RoutePaths.TOP_RATE},
  { routeName: "Upcoming", routePath: RoutePaths.UPCOMING },
]
