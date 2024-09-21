import React from "react";
import Carusel from "./Carusel";
import Image from "next/image";
import styles from "./OffersCarusel.module.css";

const OffersCarusel = ({ products }) => {
  return (
    <div className={`${styles.outerContain}`}>
      <div className={`${styles.imgContain}`}>
        <Image src="/images/box.png" width={80} height={80} />
        <Image src="/images/amazingTypo.png" width={80} height={80} />
      </div>
      <div className={`${styles.caruselContain}`}>
        <Carusel cardsCount={4} slideToShow={1} data={products} />
      </div>
    </div>
  );
};

export default OffersCarusel;
