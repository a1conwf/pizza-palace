import React from "react";
import { useDispatch } from "react-redux";
import { setSorting } from "../../redux/filter/slice";
import { Sorting, SortingPropertyEnum } from "../../redux/filter/types";

import styles from "./Sorting.module.scss";

type SortingItem = {
  name: string;
  sortProperty: SortingPropertyEnum;
};

type SortingProps = {
  sorting: Sorting;
};

const sortingList: SortingItem[] = [
  { name: "popular (DESC)", sortProperty: SortingPropertyEnum.RATING_DESC },
  { name: "popular (ASC)", sortProperty: SortingPropertyEnum.RATING_ASC },
  { name: "price (DESC)", sortProperty: SortingPropertyEnum.PRICE_DESC },
  { name: "price (ASC)", sortProperty: SortingPropertyEnum.PRICE_ASC },
  { name: "alphabet (DESC)", sortProperty: SortingPropertyEnum.TITLE_DESC },
  { name: "alphabet (ASC)", sortProperty: SortingPropertyEnum.TITLE_ASC },
];

export const SortingBlock: React.FC<SortingProps> = ({ sorting }) => {
  const dispatch = useDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [isOpened, setIsOpened] = React.useState(false);

  const handleSortingClick = (obj: SortingItem) => {
    dispatch(setSorting(obj));
    setIsOpened(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setIsOpened(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className={styles.sort}>
      <div className={styles.label}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span onClick={() => setIsOpened(!isOpened)}>{sorting.name}</span>
      </div>
      {isOpened && (
        <div className={styles.popup}>
          <ul>
            {sortingList.map((obj) => (
              <li
                key={obj.name}
                onClick={() => handleSortingClick(obj)}
                className={
                  sorting.sortProperty === obj.sortProperty ? styles.active : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
