import { SortParameters } from "@models/sort-parameters.enum";

const constants = {
  INITIAL_PAGE: 1,
  TOTAL_PAGES: 1,
};

export interface FiltersState {
  query: string,
  genres: string[],
  rating: number[],
  sortType: SortParameters,
  page: number,
  totalPages: number,
}

export const initialState: FiltersState = {
  query: "",
  genres: [],
  rating: [],
  sortType: SortParameters.DEFAULT,
  page: constants.INITIAL_PAGE,
  totalPages: constants.TOTAL_PAGES
};
