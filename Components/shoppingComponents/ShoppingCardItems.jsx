import React from "react";
import styles from "./ShoppingCardItems.module.css";
import { useSelector } from "react-redux";
import ShoppingCardprd from "./ShoppingCardprd";

const ShoppingCardItems = () => {
  const selector = useSelector((state) => state.shoppingCard);

  return (
    <div>
      {selector.items.count === 0 ? (
        <label> سبد خالی است </label>
      ) : (
        selector.items.map((item) => {
          return (
            <li className={`${styles.liCArd}`}>
              <div className={`${styles.OutCon}`}>
                <ShoppingCardprd product={item} />
              </div>
            </li>
          );
        })
      )}
    </div>
  );
};

export default ShoppingCardItems;
