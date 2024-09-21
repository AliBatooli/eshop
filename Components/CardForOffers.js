import React from "react";
import styles from "./CardForOffers.module.css";
import Image from "next/image";
import AddToCard from "./shoppingComponents/AddToCard";
import OutOfStok from "./shoppingComponents/OutOfStok";
import ItemscounterButton from "./shoppingComponents/ItemscounterButton";
import { useSelector } from "react-redux";

const CardForOffers = ({ data }) => {
  const shoppingCarditem = useSelector((state) => state.shoppingCard);
  //console.log(shoppingCarditem.items);
  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.incredibleOfferImageContainer}`}>
        {data.incredibleOffers === true ? (
          <Image
            className={`${styles.incredibleOfferImage}`}
            alt={data.name}
            src="/images/IncredibleOffer.svg"
            width={200}
            height={15}
          />
        ) : null}
      </div>
      <p align="justify" className={`${styles.productName}`}>
        {" "}
        {data.name.substring(0, 25)}
        {data.name.length > 25 ? "..." : null}
      </p>

      <Image
        alt={data.name}
        src={data.indexImageUrl}
        width={200}
        height={200}
      />
      {data.priceWithDiscount === 0 ? (
        <div className={`${styles.priceContainer}`}>
          {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
        </div>
      ) : (
        <div className={`${styles.priceDetail}`}>
          <div className={`${styles.priceContainer}`}>
            <div className={`${styles.priceBeforeOff}`}>
              {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              تومان
            </div>
            <div>
              {data.priceWithDiscount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              تومان
            </div>
          </div>
          <label className={`${styles.offPrcent}`}>
            {Math.floor(
              ((data.price - data.priceWithDiscount) / data.price) * 100
            )}
            %
          </label>
        </div>
      )}
      {shoppingCarditem.items.find((item) => item.id === data.id) ? (
        <ItemscounterButton productId={data.id} />
      ) : data.stock !== 0 ? (
        <AddToCard product={data} />
      ) : (
        <OutOfStok />
      )}
    </div>
  );
};

export default CardForOffers;

// const CardForOffers = ({ data }) => {
//   return (
//     <div>
//       <div>
//         <h1>{data.name}</h1>
//       </div>
//     </div>
//   );
// };
