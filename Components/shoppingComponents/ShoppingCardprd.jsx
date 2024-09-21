import React from "react";
import styles from "./ShoppingCardprd.module.css";
import ItemscounterButton from "./ItemscounterButton";
import Image from "next/image";

const ShoppingCardprd = (props) => {
  return (
    <div className={`${styles.OutCon}`}>
      <div>
        <label>
          <Image src={props.product.indexImageUrl} width={200} height={200} />
        </label>
      </div>
      <div className={`${styles.ItemDescription}`}>
        <label>{props.product.name}</label>
        <label>تعداد انتخاب شده : {props.product.count}</label>
        <div>
          {props.product.priceWithDiscount === 0 ? (
            <label>قیمت : {props.product.price}</label>
          ) : (
            <label>قیمت با تخفیف : {props.product.priceWithDiscount}</label>
          )}
        </div>
        <ItemscounterButton
          className={`${styles.ConterBotten}`}
          productId={props.product.id}
        />
      </div>
    </div>
  );
};

export default ShoppingCardprd;
