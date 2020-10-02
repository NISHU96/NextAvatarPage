/*
Date : 30/08/2020
Author : Naresh
Description : This functional component is box which will display the 
              history of old products.
*/
import React from "react";
import Card from "../Card/Card.components";
import Carousel from "react-multi-carousel";

import styles from "./HistoryProducts.module.scss";

export default (props) => {
  const [products] = React.useState([
    {
      title: "Citizen Watch1",
      image: "T-shirts",
      category: "Watch",
      code: "234",
      price: "$250",
    },
    {
      title: "Citizen Watch2",
      image: "jeans",
      category: "Watch",
      code: "234",
      price: "$250",
    },
    {
      title: "Citizen Watch3",
      image: "jackets",
      category: "Watch",
      code: "234",
      price: "$250",
    },
    {
      title: "Citizen Watch4",
      image: "T-shirts",
      category: "Watch",
      code: "234",
      price: "$250",
    },
    {
      title: "Citizen Watch5",
      image: "jeans",
      category: "Watch",
      code: "234",
      price: "$250",
    },
    {
      title: "Citizen Watch6",
      image: "jackets",
      category: "Watch",
      code: "234",
      price: "$250",
    },
    {
      title: "Citizen Watch7",
      image: "T-shirts",
      category: "Watch",
      code: "234",
      price: "$250",
    },
    {
      title: "Citizen Watch8",
      image: "jeans",
      category: "Watch",
      code: "234",
      price: "$250",
    },
    {
      title: "Citizen Watch9",
      image: "jackets",
      category: "Watch",
      code: "234",
      price: "$250",
    },
    {
      title: "Citizen Watch10",
      image: "T-shirts",
      category: "Watch",
      code: "234",
      price: "$250",
    },
  ]);
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <div className={styles["history-box"]}>
      <div className={styles["history-header"]}>
        <img src="/assets/trending.svg" alt="Trending" />
        <h4>RECENTLY VIEWED</h4>
      </div>
      <div className={styles["history-list"]}>
        <Carousel
          additionalTransfrom={0}
          swipeable={false}
          draggable={false}
          showDots={false}
          focusOnSelect={true}
          responsive={responsive2}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {products.map((product, idx) => (
            <div className={styles.product} key={idx}>
              <Card
                imgsrc={product.image}
                name={product.title}
                suk={product.code}
                catg={product.category}
                pric={product.price}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
