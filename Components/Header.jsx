import React from "react";
import TopBanner from "./TopBanner";
import SearchBox from "./SearchBox";
import { FaShoppingBasket } from "react-icons/fa";
import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";
import Image from "next/image";
import styles from "./Header.module.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <TopBanner />
      <div className={`${styles.Container}`}>
        <div>
          <Link href={""}>
            <div>
              <Image
                src={"https://www.digikala.com/brand/full-horizontal.svg"}
                width={"200"}
                height={"60"}
                alt={"err"}
              />
            </div>
          </Link>
        </div>
        <div>
          <SearchBox />
        </div>

        <div className={`${styles.basketAndLogin}`}>
          <Link className={`${styles.linkcolor}`} href={"/basketShoppingCard"}>
            <FaShoppingBasket size={26} />
          </Link>
          <label>
            <Link className={`${styles.linkcolor}`} href={"/Login"}>
              ورود
              <IoIosLogIn size={26} />
            </Link>
          </label>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default Header;
