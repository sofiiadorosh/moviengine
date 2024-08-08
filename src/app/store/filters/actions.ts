import { SortParameters } from "@models/sort-parameters.enum";
import { createAction, props } from "@ngrx/store";
import { filtersActionTypes } from "@store/filters/action-types";

export const setQuery = createAction(
  filtersActionTypes.SET_QUERY,
  props<{ query: string }>()
);

export const setGenre = createAction(
  filtersActionTypes.SET_GENRE,
  props<{ genre: string }>()
);

export const setRating = createAction(
  filtersActionTypes.SET_RATING,
  props<{ rating: number }>()
);

export const setSortType = createAction(
  filtersActionTypes.SET_SORT_TYPE,
  props<{ sortType: SortParameters }>()
);

export const resetFilters = createAction(
  filtersActionTypes.RESET_FILTERS,
);

export const setPage = createAction(
  filtersActionTypes.SET_PAGE,
  props<{ page: number }>()
);

export const setNextPage = createAction(
  filtersActionTypes.SET_NEXT_PAGE,
);

export const setTotalPages = createAction(
  filtersActionTypes.SET_TOTAL_PAGES,
  props<{ pages: number }>()
);
