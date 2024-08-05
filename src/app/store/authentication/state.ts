export interface AuthState {
  isAuthorized: boolean,
  token: string | null,
  sessionId: string | null,
  isLoading: boolean,
  error: string | null,
}

export const initialState: AuthState = {
  isAuthorized: false,
  token: null,
  sessionId: null,
  isLoading: false,
  error: null
};
