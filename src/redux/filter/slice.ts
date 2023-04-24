import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterState, Sorting, SortingPropertyEnum } from "./types";

const initialState: FilterState = {
  category: "All",
  currentPage: 1,
  searchValue: "",
  sorting: {
    name: "popular (DESC)",
    sortProperty: SortingPropertyEnum.RATING_DESC,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSorting(state, action: PayloadAction<Sorting>) {
      state.sorting = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategory, setSorting, setCurrentPage, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
