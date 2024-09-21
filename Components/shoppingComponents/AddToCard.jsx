import React from "react";
import styles from "./AddToCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/Redux/features/shoppingCard/ShoppingCardSlice";

const AddToCard = ({ product }) => {
  const dispatch = useDispatch();
  //const selector = useSelector((state) => state.shoppingCard);
  const clickHandler = () => {
    dispatch(addItem(product));
  };
  //console.log(selector.items);

  return (
    <div className={`${styles.labelOter}`}>
      <label onClick={clickHandler} className={`${styles.label}`}>
        اضافه کردن
      </label>
    </div>
  );
};

export default AddToCard;
