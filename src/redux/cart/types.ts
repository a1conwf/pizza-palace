export type CartPizzaItem = {
  id: number;
  name: string;
  description: string;
  selectedDough: string;
  selectedSize: number;
  price: number;
  imageUrl: string;
  count: number;
};

export type CartFoundItem = {
  id: number;
  selectedDough: string;
  selectedSize: number;
};

export interface CartState {
  items: CartPizzaItem[];
  totalPrice: number;
  totalCount: number;
}
