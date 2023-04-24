import { CartFoundItem, CartPizzaItem } from "../redux/cart/types";

export const findCartItem = (arr: CartPizzaItem[], output: CartFoundItem) => {
  const item = arr.find(
    (obj) =>
      obj.id === output.id &&
      obj.selectedSize === output.selectedSize &&
      obj.selectedDough === output.selectedDough
  );

  return item;
};
