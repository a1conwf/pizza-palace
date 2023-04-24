export type PizzaItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export type SearchPizzaParams = {
  currentPage: string;
  selectedCategory: string;
  sortBy: string;
  orderBy: string;
  searchBy: string;
};

export enum Loading {
  PENDING = "pending",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

export interface PizzaState {
  items: PizzaItem[];
  loading: "pending" | "succeeded" | "failed";
}
