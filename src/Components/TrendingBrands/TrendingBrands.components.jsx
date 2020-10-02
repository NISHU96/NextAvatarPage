/*
Date : 28/08/2020
Author : Karticikey
Description : This functional component is box which will display the 
              trending brands.
*/
import React from "react";
import styles from "./TrendingBrands.module.scss";
import { useState } from "react";

export default () => {
  const [brands_list] = useState([
    {
      imgsrc: "armani-jeans-seeklogo.com.svg",
      name: "Armani",
    },
    {
      imgsrc: "burberry-seeklogo.com.svg",
      name: "Burberry",
    },
    {
      imgsrc: "armani-jeans-seeklogo.com.svg",
      name: "Armani",
    },
    {
      imgsrc: "burberry-seeklogo.com.svg",
      name: "Burberry",
    },
    {
      imgsrc: "armani-jeans-seeklogo.com.svg",
      name: "Armani",
    },
    {
      imgsrc: "burberry-seeklogo.com.svg",
      name: "Burberry",
    },
    {
      imgsrc: "armani-jeans-seeklogo.com.svg",
      name: "Armani",
    },
    {
      imgsrc: "burberry-seeklogo.com.svg",
      name: "Burberry",
    },
  ]);
  return (
    <div className={styles["brands-box"]}>
      <div className={styles["brands-header"]}>
        <img src="assets/trending.svg" alt="Trending" />
        <h4>TRENDING BRANDS</h4>
      </div>
      <div div className={styles["brands-list"]}>
        {brands_list.map((brand, idx) => (
          <div className={styles["brand-item"]} key={idx}>
            <img
              className={styles.shadow}
              src={`assets/${brand.imgsrc}`}
              alt={brand.name}
            />
          </div>
        ))}

        {/* <div className={styles["brand-item"]}>
            <StyledPaper elevation={3}>
              <img
                src={require(`../assets/logos/burberry-seeklogo.com.svg`)}
                alt="Burberry"
              />
            </StyledPaper>
          </div> */}
        {/* <div className={styles["brand-item"]}>
              <img
                className="shadow"
                src={require(`../assets/logos/armani-jeans-seeklogo.com.svg`)}
                alt="Armani"
              /> */}
        {/* </div> */}
        {/* <div className={styles["brand-item"]}>
            <StyledPaper elevation={3}>
              <img
                src={require(`../assets/logos/burberry-seeklogo.com.svg`)}
                alt="Burberry"
              />
            </StyledPaper>
          </div> */}
        {/* <div className={styles["brand-item"]}>
            <StyledPaper elevation={3}>
              <img
                className="shadow"
                src={require(`../assets/logos/armani-jeans-seeklogo.com.svg`)}
                alt="Armani"
              />
            </StyledPaper>
          </div>
          <div className="brand-item">
            <StyledPaper elevation={3}>
              <img
                src={require(`../assets/logos/burberry-seeklogo.com.svg`)}
                alt="Burberry"
              />
            </StyledPaper>
          </div>
          <div className="brand-item">
            <StyledPaper elevation={3}>
              <img
                className="shadow"
                src={require(`../assets/logos/armani-jeans-seeklogo.com.svg`)}
                alt="Armani"
              />
            </StyledPaper>
          </div>
          <div className="brand-item">
            <StyledPaper elevation={3}>
              <img
                src={require(`../assets/logos/burberry-seeklogo.com.svg`)}
                alt="Burberry"
              />
            </StyledPaper>
          </div> */}
      </div>
    </div>
  );
};
