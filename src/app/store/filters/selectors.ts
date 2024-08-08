import { createSelector } from "@ngrx/store";
import { FiltersState } from "@store/filters/state";
import { AppState } from "@store/index";

const selectFiltersState = (state: AppState) => state.filters;

export const selectQuery = createSelector(
  selectFiltersState,
  (state: FiltersState) => state.query
);

export const selectGenres = createSelector(
  selectFiltersState,
  (state: FiltersState) => state.genres
);

export const selectRating = createSelector(
  selectFiltersState,
  (state: FiltersState) => state.rating
);

export const selectSortType = createSelector(
  selectFiltersState,
  (state: FiltersState) => state.sortType
);

export const selectPage = createSelector(
  selectFiltersState,
  (state: FiltersState) => state.page
);

export const selectTotalPages = createSelector(
  selectFiltersState,
  (state: FiltersState) => state.totalPages
);

export const selectQueryAndPage = createSelector(
  selectQuery,
  selectPage,
  (query, page) => ({ query, page })
);
