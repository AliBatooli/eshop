import React from "react";
import styles from "./ItemFooter.module.css";
import Image from "next/image";

const ItemFooter = () => {
  return (
    <div className={`${styles.outCon}`}>
      <div>
        <ul>
          <li>ثبت سفارش</li>
          <li>پشتیبانی</li>
          <li>نحوه ی ارسال</li>
          <li>تماس با ما</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>ثبت سفارش</li>
          <li>پشتیبانی</li>
          <li>نحوه ی ارسال</li>
          <li>تماس با ما</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>ثبت سفارش</li>
          <li>پشتیبانی</li>
          <li>نحوه ی ارسال</li>
          <li>تماس با ما</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>ثبت سفارش</li>
          <li>پشتیبانی</li>
          <li>نحوه ی ارسال</li>
          <li>تماس با ما</li>
        </ul>
      </div>
      <div>
        <Image
          src="/images/footer-acc.jpg"
          width={350}
          height={200}
          alt="err"
        />
      </div>
    </div>
  );
};

export default ItemFooter;
