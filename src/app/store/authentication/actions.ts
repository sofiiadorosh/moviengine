import { CreateSessionIdResponse, RequestTokenResponse } from "@models/response.interface";
import { createAction, props } from "@ngrx/store";
import { authActionTypes } from "@store/authentication/action-types";

export const requestToken = createAction(authActionTypes.REQUEST_TOKEN);
export const requestTokenSuccess = createAction(
  authActionTypes.REQUEST_TOKEN_SUCCESS,
  props<{ response: RequestTokenResponse }>()
);
export const requestTokenFailure = createAction(
  authActionTypes.REQUEST_TOKEN_FAILURE,
  props<{ error: string }>()
);

export const askForPermission = createAction(
  authActionTypes.ASK_FOR_PERMISSION,
  props<{ token: string }>()
);
export const askForPermissionSuccess = createAction(
  authActionTypes.ASK_FOR_PERMISSION_SUCCESS,
  props<{ token: string }>()
);
export const askForPermissionFailure = createAction(
  authActionTypes.ASK_FOR_PERMISSION_FAILURE,
  props<{ error: string }>()
);

export const createSessionId = createAction(
  authActionTypes.CREATE_SESSION_ID,
  props<{ token: string }>()
);
export const createSessionIdSuccess = createAction(
  authActionTypes.CREATE_SESSION_ID_SUCCESS,
  props<{ response: CreateSessionIdResponse }>()
);
export const createSessionIdFailure = createAction(
  authActionTypes.CREATE_SESSION_ID_FAILURE,
  props<{ error: string }>()
);
