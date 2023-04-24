import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/cart/selectors";
import { CartFoundItem, CartPizzaItem } from "../../redux/cart/types";
import { addItem, removeItem } from "../../redux/cart/slice";

import styles from "./PizzaBlock.module.scss";

type PizzaBlockProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

const pizzaDough = ["Thin", "Traditional"];
const pizzaSizes = [25, 30, 35];

export const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
}) => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectCart);

  const [selectedDough, setSelectedDough] = React.useState("Thin");
  const [selectedSize, setSelectedSize] = React.useState(25);

  const handleAddClick = () => {
    const item: CartPizzaItem = {
      id,
      name,
      description,
      selectedDough,
      selectedSize,
      price,
      imageUrl,
      count: 1,
    };

    dispatch(addItem(item));
  };

  const handleRemoveClick = () => {
    const item: CartFoundItem = {
      id,
      selectedDough,
      selectedSize,
    };
    dispatch(removeItem(item));
  };

  const isItemInCart = Boolean(
    items.find(
      (obj) =>
        obj.id === id &&
        obj.selectedDough === selectedDough &&
        obj.selectedSize === selectedSize
    )
  );

  return (
    <div className={styles.pizzaBlock}>
      <img src={imageUrl} alt="pizza-img" />
      <h4>{name}</h4>
      <p>{description}</p>
      <div className={styles.selector}>
        <ul>
          {pizzaDough.map((dough) => (
            <li
              key={dough}
              onClick={() => setSelectedDough(dough)}
              className={selectedDough === dough ? styles.active : ""}
            >
              {dough}
            </li>
          ))}
        </ul>
        <ul>
          {pizzaSizes.map((size) => (
            <li
              key={size}
              onClick={() => setSelectedSize(size)}
              className={selectedSize === size ? styles.active : ""}
            >
              {size} cm.
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottom}>
        <p>from {price}&euro;</p>
        {isItemInCart ? (
          <button onClick={handleRemoveClick} className="btn outline">
            <span>Remove</span>
          </button>
        ) : (
          <button onClick={handleAddClick} className="btn outline">
            <span>Add</span>
          </button>
        )}
      </div>
    </div>
  );
};
