import Link from "next/link";
import React from "react";
import styles from "./SellForCAtegory.module.css";

const SellForCAtegory = ({ data }) => {
  return (
    <div className={`${styles.outContain}`}>
      <div className={`${styles.titlecCon}`}>
        <h3>خرید بر اساس دسته بندی</h3>
      </div>
      <div className={`${styles.itemCon}`}>
        {data.map((item) => {
          return (
            <div className={`${styles.linkDiv}`}>
              <Link
                className={`${styles.linkitem}`}
                href={`products/category/${item.name}`}
              >
                <h5>{item.name}</h5>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SellForCAtegory;
