import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AuthState } from "./state";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const selectToken = createSelector(
  selectAuthState,
  (state: AuthState) => state.token
);

export const selectSessionId = createSelector(
  selectAuthState,
  (state: AuthState) => state.sessionId
);

export const selectIsAuthorized = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthorized
);

export const selectError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);

export const selectIsLoading = createSelector(
  selectAuthState,
  (state: AuthState) => state.isLoading
);
