import React, { useRef } from "react";
import styles from "./SearchBox.module.css";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBox = () => {
  const text = useRef();
  const router = useRouter();
  //console.log(Searchtext.current.value);

  const clickHandler = () => {
    router.push(`/products/SearchResult/${text.current.value}`);
  };

  return (
    <div>
      {/* <input type="text" ref={text} /> */}
      <InputGroup className="mb-3">
        <Form.Control
          dir="rtl"
          ref={text}
          type="text"
          placeholder="جستجو کنید"
        />
        <Button onClick={clickHandler} variant="secondary">
          <FiSearch />
        </Button>
      </InputGroup>
      {/* <button className={`${styles.searchButton}`} >
        
      </button> */}
    </div>
  );
};

export default SearchBox;
