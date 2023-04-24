export enum SortingPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASC = "+rating",
  PRICE_DESC = "price",
  PRICE_ASC = "+price",
  TITLE_DESC = "title",
  TITLE_ASC = "+title",
}

export type Sorting = {
  name: string;
  sortProperty: SortingPropertyEnum;
};

export interface FilterState {
  category: string;
  currentPage: number;
  searchValue: string;
  sorting: Sorting;
}
