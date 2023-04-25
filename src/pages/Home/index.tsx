import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { selectPizzaData } from "../../redux/pizzas/selectors";
import { selectFilter } from "../../redux/filter/selectors";
import { fetchPizzas } from "../../redux/pizzas/asyncActions";

import {
  Categories,
  SortingBlock,
  PizzaBlock,
  PizzaSkeleton,
  Pagination,
} from "../../components";

import styles from "./Home.module.scss";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items, loading } = useSelector(selectPizzaData);
  const { category, sorting, currentPage, searchValue } =
    useSelector(selectFilter);

  const getPizzas = async () => {
    const selectedCategory = category !== "All" ? `category=${category}` : "";
    const sortBy = sorting.sortProperty.replace("+", "");
    const orderBy = sorting.sortProperty.includes("+") ? "asc" : "desc";
    const searchBy = searchValue ? `&name=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        currentPage: String(currentPage),
        selectedCategory,
        sortBy,
        orderBy,
        searchBy,
      })
    );
  };

  React.useEffect(() => {
    getPizzas();
  }, [category, sorting.sortProperty, searchValue, currentPage]);

  const pizzasArr = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const pizzaSkeletons = [...new Array(8)].map((_, index) => (
    <PizzaSkeleton key={index} />
  ));

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Categories category={category} />
        <SortingBlock sorting={sorting} />
      </div>

      {loading === "failed" ? (
        <div className={styles.error}>
          <h2>Oops! Error occured.</h2>
          <p>Unfortunately we could not get pizzas. Please try again later!</p>
        </div>
      ) : (
        <>
          <h2>{category} pizzas</h2>
          <div className={styles.content}>
            {loading === "pending" ? pizzaSkeletons : pizzasArr}
          </div>

          {loading === "succeeded" && pizzasArr.length < 1 ? (
            <div className={styles.error}>
              <h2>Oops! Nothing was found for your request </h2>
              <p>Try providing another request</p>
            </div>
          ) : null}
          <Pagination category={category} />
        </>
      )}
    </main>
  );
};

export default Home;
