import { Categories } from "@models/categories.enum";
import { SortParameters } from "@models/sort-parameters.enum";

const INITIAL_PAGE = 1;

export interface FiltersState {
  query: string,
  category: Categories,
  genres: string[],
  rating: number[],
  sortType: SortParameters,
  page: number,
}

export const initialState: FiltersState = {
  query: "",
  category: Categories.ALL,
  genres: [],
  rating: [],
  sortType: SortParameters.DEFAULT,
  page: INITIAL_PAGE,
};
