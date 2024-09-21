import ShoppingCardItems from "@/Components/shoppingComponents/ShoppingCardItems";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./basketShoppingCard.module.css";
const basketShoppingCard = () => {
  const [totalpriceWD, settotalpriceWD] = useState(0);
  const selector = useSelector((state) => state.shoppingCard);
  useEffect(() => {
    const totalPrice = selector.items.reduce(
      (sum, item) => sum + item.price * item.count,
      0
    );
    settotalpriceWD(totalPrice);
  }, [selector.items]);
  return (
    <div className={`${styles.OutCon}`}>
      <div className={`${styles.ItemBasketCon}`}>
        <div>
          <h3>سبد خرید شما</h3>
        </div>
        <div className={`${styles.liCardItem}`}>
          <ul>
            <li>
              <ShoppingCardItems />
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.ReschnungCon}`}>
        <ul>
          <li>
            <label>تعداد اقلام سفارش : {selector.totalCount}</label>
          </li>
          <li>
            <label>مجموع قیمت بدون تخفیف: {totalpriceWD}</label>
          </li>
          <li>
            <label>
              سود شما از این خرید : {totalpriceWD - selector.totalAmount}
            </label>
          </li>
          <li>
            <label>قیمت نهایی : {selector.totalAmount}</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default basketShoppingCard;
