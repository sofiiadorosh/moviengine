import { Categories } from "@models/categories.enum";
import { SortParameters } from "@models/sort-parameters.enum";
import { createReducer, on } from "@ngrx/store";
import { FiltersState, initialState } from "@store/filters/state";

import * as FiltersActions from "./actions";

const toggleArrayItem = <T>(array: T[], item: T): T[] =>
  array.includes(item) ? array.filter(i => i !== item) : [...array, item];

export const filtersReducer = createReducer(
  initialState,
  on(FiltersActions.setQuery, (state, { query }): FiltersState => ({
    ...state, query
  })),
  on(FiltersActions.setCategory, (state, { category }): FiltersState => ({
    ...state, category
  })),
  on(FiltersActions.setGenre, (state, { genre }): FiltersState => ({
    ...state, genres: toggleArrayItem(state.genres, genre)
  })),
  on(FiltersActions.setRating, (state, { rating }): FiltersState => ({
    ...state, rating: toggleArrayItem(state.rating, rating)
  })),
  on(FiltersActions.setSortType, (state, { sortType }): FiltersState => ({
    ...state, sortType
  })),
  on(FiltersActions.resetFilters, (): FiltersState => ({
    ...initialState,
    category: Categories.ALL,
    sortType: SortParameters.DEFAULT,
  })),
  on(FiltersActions.setPage, (state, { page }): FiltersState => ({
    ...state, page
  })),
  on(FiltersActions.setNextPage, (state): FiltersState => ({
    ...state, page: state.page + 1,
  }))
)
