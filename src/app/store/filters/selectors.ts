import { createSelector } from "@ngrx/store";
import { FiltersState } from "@store/filters/state";
import { AppState } from "@store/index";

const selectFiltersState = (state: AppState) => state.filters;

export const selectQuery = createSelector(
  selectFiltersState,
  (state: FiltersState) => state.query
);

export const selectCategory = createSelector(
  selectFiltersState,
  (state: FiltersState) => state.category
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

export const selectQueryAndPage = createSelector(
  selectQuery,
  selectPage,
  (query, page) => ({ query, page })
);
