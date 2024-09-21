import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./BannerAds.module.css";

const BannerAds = ({ data }) => {
  return (
    <div className={`${styles.OutContainer}`}>
      {data.map((item) => {
        return (
          <Link href={`products/category/phones`}>
            <Image
              className={`${styles.imgBanner}`}
              src={`${item.original}`}
              width={"650"}
              height={"200"}
              alt={"err"}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default BannerAds;
