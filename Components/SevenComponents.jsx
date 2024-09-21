import Image from "next/image";
import React from "react";
import styles from "./SevenComponents.module.css";
import Link from "next/link";

const SevenComponents = ({ data }) => {
  return (
    <div className={`${styles.outContainer}`}>
      {data.map((item) => {
        return (
          <Link
            className={`${styles.LinkStyle}`}
            href={`products/Cat/${item.url}`}
          >
            <div className={`${styles.ItemContainer}`}>
              <Image
                src={`/images/${item.iconName}`}
                width={"60"}
                height={"60"}
                alt={item.label}
              />
              <label className={`${styles.ItemLabel}`}>{item.label}</label>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SevenComponents;

// baraye inke serverside url image icon ha ro begirim mirim
// toye file index o oonja get mizanim
