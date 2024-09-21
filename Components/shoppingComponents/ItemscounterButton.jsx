import React from "react";
import styles from "./ItemscounterButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "@/Redux/features/shoppingCard/ShoppingCardSlice";
import { BsFillTrash3Fill } from "react-icons/bs";

const ItemscounterButton = ({ productId }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.shoppingCard);
  const count = selector.items.filter((item) => item.id === productId)[0].count;
  return (
    <div className={`${styles.OutCon}`}>
      <label
        className={`${styles.labelOFbutten}`}
        onClick={() => dispatch(increaseItem(productId))}
      >
        +
      </label>
      <label className={`${styles.labelOFbutten}`}>{count}</label>
      <label className={`${styles.labelOFbutten}`}>
        {count === 1 ? (
          <BsFillTrash3Fill onClick={() => dispatch(removeItem(productId))} />
        ) : (
          <span onClick={() => dispatch(decreaseItem(productId))}>-</span>
        )}
      </label>
    </div>
  );
};

export default ItemscounterButton;
