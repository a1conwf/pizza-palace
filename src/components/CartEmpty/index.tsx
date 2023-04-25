import React from "react";
import { Link } from "react-router-dom";

import styles from "./CartEmpty.module.scss";

import emptyCartImg from "../../assets/img/empty-cart.png";

export const CartEmpty: React.FC = () => {
  return (
    <div className={styles.cartEmpty}>
      <h2>Cart is empty</h2>
      <p>
        You have not ordered any pizza yet.
        <br />
        To make an order, go back to the home page
      </p>
      <img src={emptyCartImg} alt="empty-cart" />
      <Link to="/">
        <button className="btn outline black">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L1 6.93015L6.86175 1"
              stroke="#D3D3D3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span>Go back</span>
        </button>
      </Link>
    </div>
  );
};
