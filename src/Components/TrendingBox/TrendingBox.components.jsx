import styles from "./TrendingBox.module.scss";
import Carousel from "react-multi-carousel";
import { useState } from "react";
import Card from "../Card/Card.components";

export default (props) => {
  const [trending_products] = useState([
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
  ]);

  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className={styles["trending-box"]}>
      <div className={styles["trending-header"]}>
        <img src="assets/trending.svg" alt="Trending" />
        <h4>TRENDING NOW!!</h4>
      </div>
      <div className={styles["trending-inner-box"]}>
        <div className={styles["trending-button"]}>
          <img src="assets/shorts.png" alt="Shorts" />
          <h5>Trending Shorts</h5>
          <div className={styles["view-btn"]}>VIEW ALL</div>
        </div>
        <div id="scrolling-list" className={styles["trending-list"]}>
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
            {trending_products.map((product, idx) => (
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
    </div>
  );
};
