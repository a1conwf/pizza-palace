import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/filter/slice";

import styles from "./Pagination.module.scss";

type PaginationProps = {
  category: string;
};

export const Pagination: React.FC<PaginationProps> = ({ category }) => {
  const dispatch = useDispatch();

  const totalPages =
    category === "Meat"
      ? 2
      : category === "Vegetarian"
      ? 1
      : category === "Spicy"
      ? 1
      : 4;

  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
      pageRangeDisplayed={4}
      pageCount={totalPages}
      previousLabel="<"
    />
  );
};
