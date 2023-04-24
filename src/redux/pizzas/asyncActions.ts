import { createAsyncThunk } from "@reduxjs/toolkit";
import { PizzaItem, SearchPizzaParams } from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<PizzaItem[], SearchPizzaParams>(
  "pizzas/fetchPizzasByStatus",
  async (params) => {
    const { currentPage, selectedCategory, sortBy, orderBy, searchBy } = params;

    const { data } = await axios.get<PizzaItem[]>(
      `${
        import.meta.env.VITE_API_URL
      }/pizzas?page=${currentPage}&limit=4&${selectedCategory}&sortBy=${sortBy}&order=${orderBy}${searchBy}`
    );

    return data;
  }
);
