import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/filter/slice";

import styles from "./Categories.module.scss";

type CategoryProps = {
  category: string;
};

const categoriesList = ["All", "Meat", "Vegetarian", "Spicy"];

export const Categories: React.FC<CategoryProps> = ({ category }) => {
  const dispatch = useDispatch();

  return (
    <ul className={styles.categories}>
      {categoriesList.map((item) => (
        <li
          key={item}
          className={category === item ? styles.active : ""}
          onClick={() => dispatch(setCategory(item))}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
