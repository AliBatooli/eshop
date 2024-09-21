import React, { useEffect, useState } from "react";
// import server from "../config/ServerConfig.json";
// import axios from "axios";
import Image from "next/image";
import styles from "./TopBanner.module.css";
import * as axiosrepository from "@/Repository/AxiosRepository";

const TopBanner = () => {
  const [bannerUrl, setbannerurl] = useState({});

  useEffect(() => {
    // axios
    //   .get(`${server.serverAddress}topBanner`)
    axiosrepository
      .Get("topBanner")
      .then((response) => setbannerurl(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div style={{ height: "60px" }}>
      {/* image from next for responsice auto bayad host config beshe to file nextConfig.Mjs*/}
      <Image
        className={`${styles.image}`}
        fill
        alt="eshop"
        src={bannerUrl.imageUrl}
      />
    </div>
  );
};

export default TopBanner;
