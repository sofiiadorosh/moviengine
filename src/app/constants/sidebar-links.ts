import {RoutePaths} from "@models/route-paths.enum";

export const sidebarLinks: { name: string, href: RoutePaths }[] = [
  { name: "Now playing", href: RoutePaths.NOW_PLAYING },
  { name: "Popular", href: RoutePaths.POPULAR },
  { name: "Top rate", href: RoutePaths.TOP_RATE},
  { name: "Upcoming", href: RoutePaths.UPCOMING },
]
