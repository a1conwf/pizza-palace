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
        To make an order, go back to the main page
      </p>
      <img src={emptyCartImg} alt="empty-cart" />
      <Link to="/">
        <button className="btn">
          <span>Go Back</span>
        </button>
      </Link>
    </div>
  );
};
