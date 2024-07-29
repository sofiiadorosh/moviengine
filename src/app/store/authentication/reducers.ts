import { createReducer, on } from "@ngrx/store";
import { AuthState, initialState } from "@store/authentication/state";

import * as AuthActions from "./actions";

export const authReducer = createReducer(
  initialState,
  on(AuthActions.requestToken, (state): AuthState => ({ ...state, isLoading: true, error: null })),
  on(AuthActions.requestTokenSuccess, (state, { response }): AuthState => ({
    ...state, token: response.request_token, isLoading: false })),
  on(AuthActions.requestTokenFailure, (state, { error }): AuthState => ({
    ...state, error, isLoading: false })),
  on(AuthActions.askForPermission, (state): AuthState => ({ ...state, isLoading: true, error: null })),
  on(AuthActions.askForPermissionSuccess, (state): AuthState => ({ ...state, isLoading: false })),
  on(AuthActions.askForPermissionFailure, (state, { error }): AuthState => ({
    ...state, error, isLoading: false })),
  on(AuthActions.createSessionId, (state): AuthState => ({ ...state, isLoading: true, error: null })),
  on(AuthActions.createSessionIdSuccess, (state, { response }): AuthState => ({
    ...state, sessionId: response.session_id, isLoading: false })),
  on(AuthActions.createSessionIdFailure, (state, { error }): AuthState => ({
    ...state, error, isLoading: false }))
);
