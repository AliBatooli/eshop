import React from "react";
import styles from "./OutOfStok.module.css";

const OutOfStok = () => {
  return (
    <div className={`${styles.labelOter}`}>
      <label className={`${styles.label}`}>نا موجود</label>
    </div>
  );
};

export default OutOfStok;
