import styles from "./MainPanel.module.scss";
import Carousel from "react-multi-carousel";

import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

export default (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles["main-panel"]}>
      <div className={styles["catalog-button"]}>
        <h2>Explore our full range through our catalogue</h2>
        <div className={styles["shop-btn"]}>SHOP NOW</div>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.carousel}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          focusOnSelect={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className={styles["paper-container"]}>
            <img src="assets/streetwear.jpg" alt="streetwear" />
          </div>
          <div className={styles["paper-container"]}>
            <img src="assets/accessories.jpg" alt="accessories" />
          </div>
          <div className={styles["paper-container"]}>
            <img src="assets/partywear.jpg" alt="partywear" />
          </div>
        </Carousel>
      </div>
      <div className={styles["offers-tile"]}>
        <Paper elevation={3} className={styles["paper-class"]}>
          <div className={styles["first-part"]}>
            <h3>Today's Hot Offers</h3>
            <div className={styles["offers-btn"]}>View All</div>
          </div>
          <div className="vl"></div>
          <div className={styles["second-part"]}>
            <Paper className={styles["offers-paper"]}>
              <img src="assets/t-shirts.png" alt="Shirts" />
            </Paper>
          </div>
        </Paper>
      </div>
    </div>
  );
};
