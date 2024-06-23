import { RoutePaths } from "@models/route-paths.enum";

export const headerLinks: { name: string, href: RoutePaths, icon: string }[] = [
  { name: "Favorites", href: RoutePaths.FAVORITES, icon: "heart-shine" },
  { name: "Watch later", href: RoutePaths.WATCH_LATER, icon: "star-shine" },
]
