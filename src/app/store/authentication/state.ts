export interface AuthState {
  token: string | null;
  sessionId: string | null;
  isLoading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  token: null,
  sessionId: null,
  isLoading: false,
  error: null
};
