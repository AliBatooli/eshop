import React from "react";
import CardForOffers from "./CardForOffers";
import styles from "./IncredibleOffers.module.css";

const IncredibleOffers = ({ products }) => {
  return (
    <div className={`${styles.outerContain}`}>
      <div className={`${styles.outerContain}`}>
        <h2>پیشنها های باورنکردنی</h2>
      </div>
      <div className={`${styles.itemCon}`}>
        {products.map((item) => {
          return (
            <div className={`${styles.card}`}>
              {" "}
              <CardForOffers data={item} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IncredibleOffers;
