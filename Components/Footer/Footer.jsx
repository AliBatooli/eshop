import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";
import ItemFooter from "./ItemFooter";

const Footer = () => {
  return (
    <div className={`${styles.outCon}`}>
      <Image
        src="/images/Footer.jpg"
        layout="responsive"
        width={700}
        height={475}
      />
      <ItemFooter />
    </div>
  );
};

export default Footer;
