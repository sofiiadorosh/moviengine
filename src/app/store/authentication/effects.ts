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
      switchMap(action => {
        return this.authService.getRequestToken().pipe(
          map(response => AuthActions.requestTokenSuccess({
            response,
            username: action.username,
            password: action.password
          })),
          catchError((error: Error) => {
            const message = error.message || "Request token failed";
            return of(AuthActions.requestTokenFailure({ error: message }));
          })
        );
      })
    );
  });

  askForPermission$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.requestTokenSuccess),
      switchMap(action => {
        const { username, password } = action;
        const token = action.response.request_token;
        return this.authService.askForPermission({ username, password, token }).pipe(
          map(() => AuthActions.askForPermissionSuccess({ token })),
          catchError((error: Error) => {
            const message = error.message || "Permission request failed";
            return of(AuthActions.askForPermissionFailure({ error: message }));
          })
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
          catchError((error: Error) => {
            const message = error.message || "Session creation failed";
            return of(AuthActions.createSessionIdFailure({ error: message }));
          })
        );
      })
    );
  });
}
