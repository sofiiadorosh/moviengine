import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthenticationService } from "@services/authentication/authentication.service";
import { catchError, map, of, switchMap } from "rxjs";

import * as AuthActions from "./actions";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService
  ) {}

  requestToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.requestToken),
      switchMap(() => {
        return this.authService.getRequestToken().pipe(
          map(response => AuthActions.requestTokenSuccess({ response })),
          catchError(error => of(AuthActions.requestTokenFailure({ error })))
        );
      })
    );
  });

  askForPermission$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.requestTokenSuccess),
      switchMap(action => {
        const token = action.response.request_token;
        return this.authService.askForPermission({ username: "sofidorosh",
          password: "Thesadness86",token }).pipe(
          map(() => AuthActions.askForPermissionSuccess({ token })),
          catchError(error => of(AuthActions.askForPermissionFailure({ error })))
        );
      })
    );
  });

  createSessionId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.askForPermissionSuccess),
      switchMap(action => {
        const token = action.token;
        return this.authService.createSessionId(token).pipe(
          map(response => AuthActions.createSessionIdSuccess({ response })),
          catchError(error => of(AuthActions.createSessionIdFailure({ error })))
        );
      })
    );
  });
}
