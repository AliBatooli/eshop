import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./SuggestInCategory.module.css";

const SuggestInCategory = ({ data }) => {
  return (
    <div>
      <div className={`${styles.mutterCon}`}>
        {data.map((item) => {
          return (
            <div className={`${styles.outContain}`}>
              <div className={`${styles.titleCategoryCon}`}>
                <Link
                  className={`${styles.titleCategory}`}
                  href={`products/category/${item.name}`}
                >
                  <h5>{item.name}</h5>
                </Link>
              </div>
              <div className={`${styles.itemCon}`}>
                {item.products.map((item) => {
                  return (
                    <Image
                      src={item.indexImageUrl}
                      alt="err"
                      width={120}
                      height={120}
                    />
                  );
                })}
              </div>
              <div className={`${styles.PlustitleCon}`}>
                <Link
                  className={`${styles.plusTitle}`}
                  href={`products/category/${item.name}`}
                >
                  مشاهده تمام محصولات دسته بندی
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestInCategory;
