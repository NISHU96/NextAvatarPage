/*
Date : 26/08/2020
Author : Karticikey
Description : This is functional card component which is used to display
              a single product componenet in the webiste.
              It will be used throughout the website
*/
import React from "react";
import styles from "./Card.module.scss";

export default (props) => {
  return (
    <div>
      <article>
        <div className={styles.itemss}>
          <div className={styles.item}>
            <img
              className={styles.pictu}
              src={`assets/${props.imgsrc}.jpg`}
              alt="watch"
            />
          </div>
          <div className={styles.heart}>
            <img src="assets/empty_heart.png" />
          </div>

          <div className={styles.description}>
            <div className={styles.brand}>{props.name}</div>
            <div className={styles.type}>{props.catg}</div>
            <h5 className={styles.cod}> SUK Code:{props.suk}</h5>
            <div className={styles.rate}>{props.pric}</div>
            <div className={styles.size}>
              <ul className={styles["size-list"]}>
                <li className={styles["list-item"]}>S</li>
                <li className={styles["list-item"]}>M</li>
                <li className={styles["list-item"]}>L</li>
              </ul>
              <div className={styles.wrapper}>
                <button className={styles.add}>Add to cart</button>
              </div>
              <button className={styles.babba}> ok</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
