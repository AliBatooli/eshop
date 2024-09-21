import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import AddToCard from "./shoppingComponents/AddToCard";
import OutOfStok from "./shoppingComponents/OutOfStok";
import ItemscounterButton from "./shoppingComponents/ItemscounterButton";
import { useSelector } from "react-redux";

const Card = ({ product }) => {
  const shoppingCarditem = useSelector((state) => state.shoppingCard);
  //console.log(shoppingCarditem.items);
  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.incredibleOfferImageContainer}`}>
        {product.incredibleOffers === true ? (
          <Image
            className={`${styles.incredibleOfferImage}`}
            alt={product.name}
            src="/images/IncredibleOffer.svg"
            width={200}
            height={15}
          />
        ) : null}
      </div>
      <p align="justify" className={`${styles.productName}`}>
        {" "}
        {product.name.substring(0, 25)}
        {product.name.length > 25 ? "..." : null}
      </p>

      <Image
        alt={product.name}
        src={product.indexImageUrl}
        width={200}
        height={200}
      />
      {product.priceWithDiscount === 0 ? (
        <div className={`${styles.priceContainer}`}>
          {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
        </div>
      ) : (
        <div className={`${styles.priceDetail}`}>
          <div className={`${styles.priceContainer}`}>
            <div className={`${styles.priceBeforeOff}`}>
              {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              تومان
            </div>
            <div>
              {product.priceWithDiscount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              تومان
            </div>
          </div>
          <label className={`${styles.offPrcent}`}>
            {Math.floor(
              ((product.price - product.priceWithDiscount) / product.price) *
                100
            )}
            %
          </label>
        </div>
      )}
      {shoppingCarditem.items.find((item) => item.id === product.id) ? (
        <ItemscounterButton productId={product.id} />
      ) : product.stock !== 0 ? (
        <AddToCard product={product} />
      ) : (
        <OutOfStok />
      )}
    </div>
  );
};

export default Card;
