import React from "react";
import * as axiosRepository from "../../../Repository/AxiosRepository";
import Card from "@/Components/Card";
import styles from "./[categoryName].module.css";

const categoryName = (props) => {
  return (
    <div className={`${styles.outContain}`}>
      {props.CatData.products.map((item) => {
        return <Card product={item} />;
      })}
    </div>
  );
};

export default categoryName;
export async function getServerSideProps(context) {
  let CatData = [];

  const response = await axiosRepository.Get(
    `products/category/${context.params.categoryName}`
  ); //selectCat esme page dynamic hast
  CatData = await response.data;
  //.catch((error) => console.log(error));
  return {
    props: { CatData },
  };
}
