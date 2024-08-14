import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { RoutePaths } from "@models/route-paths.enum";
import { Store } from "@ngrx/store";
import { selectIsAuthorized } from "@store/authentication/selectors";
import { map, take, tap } from "rxjs/operators";

export const loginRedirectGuard: CanActivateFn = () => {
  const router = inject(Router);
  const store = inject(Store);

  return store.select(selectIsAuthorized).pipe(
    take(1),
    tap(isAuthorized => isAuthorized && router.navigate([RoutePaths.DEFAULT])),
    map(isAuthorized => !isAuthorized)
  );
};
