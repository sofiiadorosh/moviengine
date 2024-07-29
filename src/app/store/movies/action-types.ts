export const movieActionTypes = {
  LOAD: (type: string) => `[Movie] Load ${type} Movies`,
  LOAD_SUCCESS: (type: string) => `[Movie] Load ${type} Movies Success`,
  LOAD_FAILURE: (type: string) => `[Movie] Load ${type} Movies Failure`,
  UPDATE: (type: string) => `[Movie] Update ${type}`,
  UPDATE_SUCCESS: (type: string) => `[Movie] Update ${type} Success`,
  UPDATE_FAILURE: (type: string) => `[Movie] Update ${type} Failure`,
  LOAD_MOVIE_DETAILS: "[Movie] Load Movie Details",
  LOAD_MOVIE_DETAILS_SUCCESS: "[Movie] Load Movie Details Success",
  LOAD_MOVIE_DETAILS_FAILURE: "[Movie] Load Movie Details Failure",
  SET_FAVORITE_MOVIES_IDS: "[Favorite Movies] Set Favorite Movie IDs",
  SET_WATCH_LATER_MOVIES_IDS: "[Watch Later Movies] Set Watch Later Movie IDs"
};
