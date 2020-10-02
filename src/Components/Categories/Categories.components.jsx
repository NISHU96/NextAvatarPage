import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import styles from "./Categories.module.scss";
import { useState } from "react";

const StyledPaper = styled(Paper)`
  background-color: #edf0f4;
  border-radius: 25px;
`;

export default () => {
  const [categories] = useState([
    {
      img_src: "/assets/glasses.png",
      name: "Sunglasses",
    },
    {
      img_src: "assets/accessories.jpg",
      name: "T-Shirts",
    },
    {
      img_src: "assets/nail_polish.png",
      name: "Nail_polish",
    },
    {
      img_src: "assets/handbags.png",
      name: "Handbags",
    },
    {
      img_src: "assets/denims.png",
      name: "Denims",
    },
    {
      img_src: "assets/shorts.png",
      name: "Shorts",
    },
  ]);
  return (
    <div className={styles["categories-box"]}>
      <div className={styles["container-list"]}>
        {categories.map((category, index) => (
          <div className={styles["list-item"]} key={index}>
            <StyledPaper elevation={3}>
              <img src={category.img_src} alt={category.name} />
              <div className={styles["category-name"]}>
                <p style={{ fontWeight: "bold" }}>Shop</p>
                {category.name}
              </div>
            </StyledPaper>
          </div>
        ))}
      </div>
    </div>
  );
};
