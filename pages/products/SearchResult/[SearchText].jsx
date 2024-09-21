import React from "react";
import * as axiosRepository from "../../../Repository/AxiosRepository";
import styles from "./[SearchText].module.css";
import Card from "@/Components/Card";

const SearchText = (props) => {
  return (
    <div className={`${styles.outContain}`}>
      {props.searchtextData.map((item) => {
        return <Card product={item} />;
      })}
    </div>
  );
};

export default SearchText;

export async function getServerSideProps(context) {
  let searchtextData = [];

  const response = await axiosRepository.Get(
    `products/search/${context.params.SearchText}`
  ); //selectCat esme page dynamic hast
  searchtextData = await response.data;
  //.catch((error) => console.log(error));
  return {
    props: { searchtextData },
  };
}
