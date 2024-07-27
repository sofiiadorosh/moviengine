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

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state: AuthState) => state.isLoading
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);
