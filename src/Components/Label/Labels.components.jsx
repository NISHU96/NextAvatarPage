/*
Date : 28/08/2020
Author : Karticikey
Description : This functional component is used to display label tile
              for a category to shop.
              It can be consumed anywhere like men or women
*/
import React from "react";
import styles from "./Labels.module.scss";

export default (props) => {
  return (
    <div>
      <a href="#" className={styles.clickable}>
        <div className={styles["image-box"]}>
          <img src={props.theme_img} alt={props.theme_alt} />
        </div>
        <div className={styles["shop-box"]}>
          <h2>{props.title}</h2>
          <div className={styles.arrow}>&#8594;</div>
        </div>
      </a>
    </div>
  );
};
