import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartFoundItem, CartPizzaItem, CartState } from "./types";
import { findCartItem } from "../../utils/findCartItem";

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartPizzaItem>) {
      state.items.push(action.payload);
      state.totalCount++;
      state.totalPrice += action.payload.price;
    },
    removeItem(state, action: PayloadAction<CartFoundItem>) {
      const foundItem = findCartItem(state.items, action.payload);

      if (foundItem) {
        state.items = state.items.filter((item) => item !== foundItem);
        state.totalCount -= foundItem.count;
        state.totalPrice -= foundItem.count * foundItem.price;
      }
    },
    incrementCount(state, action: PayloadAction<CartFoundItem>) {
      const foundItem = findCartItem(state.items, action.payload);

      if (foundItem) {
        foundItem.count++;
        state.totalCount++;
        state.totalPrice += foundItem.price;
      }
    },
    decrementCount(state, action: PayloadAction<CartFoundItem>) {
      const foundItem = findCartItem(state.items, action.payload);

      if (foundItem) {
        foundItem.count--;
        state.totalCount--;
        state.totalPrice -= foundItem.price;
      }
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementCount,
  decrementCount,
  clearItems,
} = cartSlice.actions;

export default cartSlice.reducer;
