import React from "react";
import * as axiosRepository from "../../../Repository/AxiosRepository";
import PrdCard from "@/Components/PrdCard";
import Card from "@/Components/Card";
import styles from "./[SelectCat].module.css";

const SelectCat = (props) => {
  return (
    <div className={`${styles.outContain}`}>
      {props.selectCatData.map((item) => {
        return <Card product={item} />;
      })}
    </div>
  );
};

export default SelectCat;

export async function getServerSideProps(context) {
  let selectCatData = [];

  const response = await axiosRepository.Get(
    `products/${context.params.SelectCat}`
  ); //selectCat esme page dynamic hast
  selectCatData = await response.data;
  //.catch((error) => console.log(error));
  return {
    props: { selectCatData },
  };
}
