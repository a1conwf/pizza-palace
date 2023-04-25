import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
  removeItem,
} from "../../redux/cart/slice";
import { CartFoundItem } from "../../redux/cart/types";

import styles from "./CartItem.module.scss";

type CartItemProps = {
  id: number;
  name: string;
  description: string;
  selectedDough: string;
  selectedSize: number;
  price: number;
  imageUrl: string;
  count: number;
};

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  description,
  selectedDough,
  selectedSize,
  price,
  imageUrl,
  count,
}) => {
  const dispatch = useDispatch();

  const foundItem: CartFoundItem = {
    id,
    selectedDough,
    selectedSize,
  };

  const handleItemRemove = () => {
    if (
      window.confirm("Are you sure you want to remove this pizza from order?")
    ) {
      dispatch(removeItem(foundItem));
    }
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.order}>
        <img src={imageUrl} alt="pizza-img" />
        <div className={styles.info}>
          <div>
            <h3>{name}</h3>
            <span>
              {selectedDough} dough, {selectedSize} cm.
            </span>
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.count}>
          <button
            onClick={() => dispatch(decrementCount(foundItem))}
            className="btn outline circle"
            disabled={count === 1}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="#EB5A1E"
              ></path>
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="#EB5A1E"
              ></path>
            </svg>
          </button>
          <span>{count}</span>
          <button
            onClick={() => dispatch(incrementCount(foundItem))}
            className="btn outline circle"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="#EB5A1E"
              ></path>
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="#EB5A1E"
              ></path>
            </svg>
          </button>
        </div>
        <span className={styles.price}>
          {(price * count).toFixed(2)} &euro;
        </span>
        <div onClick={handleItemRemove} className={styles.remove}>
          <button className="btn outline circle">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="#EB5A1E"
              ></path>
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="#EB5A1E"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
