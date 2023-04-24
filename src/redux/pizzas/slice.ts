import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Loading, PizzaItem, PizzaState } from "./types";
import { fetchPizzas } from "./asyncActions";

const initialState: PizzaState = {
  items: [],
  loading: Loading.PENDING,
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PizzaItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.loading = Loading.PENDING;
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = Loading.SUCCEEDED;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.loading = Loading.FAILED;
        state.items = [];
      });
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
