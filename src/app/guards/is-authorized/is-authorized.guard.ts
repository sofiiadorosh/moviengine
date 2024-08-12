import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { RoutePaths } from "@models/route-paths.enum";
import { Store } from "@ngrx/store";
import { selectIsAuthorized } from "@store/authentication/selectors";
import { map, take } from "rxjs/operators";

export const isAuthorizedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(Store);

  return store.select(selectIsAuthorized).pipe(
    take(1),
    map(isAuthorized => {
      if (isAuthorized) {
        return true;
      }

      router.navigate([RoutePaths.AUTH], { queryParams: { returnUrl: state.url } });
      return false;
    })
  );
};
