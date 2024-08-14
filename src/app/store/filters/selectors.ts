import { createSelector } from "@ngrx/store";
import { AppState } from "@store/index";

const selectFiltersState = (state: AppState) => state.filters;

export const selectQuery = createSelector(
  selectFiltersState,
  (state) => state.query
);

export const selectGenres = createSelector(
  selectFiltersState,
  (state) => state.genres
);

export const selectRating = createSelector(
  selectFiltersState,
  (state) => state.rating
);

export const selectSortType = createSelector(
  selectFiltersState,
  (state) => state.sortType
);

export const selectPage = createSelector(
  selectFiltersState,
  (state) => state.page
);

export const selectTotalPages = createSelector(
  selectFiltersState,
  (state) => state.totalPages
);

export const selectQueryAndPage = createSelector(
  selectQuery,
  selectPage,
  (query, page) => ({ query, page })
);
