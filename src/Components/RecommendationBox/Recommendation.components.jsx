import { useState } from "react";
import styles from "./Recommendation.module.scss";
import Card from "../Card/Card.components";

export default () => {
  const [recommended_products] = useState([
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

  return (
    <div className={styles["recommendation-box"]}>
      <div className={styles["recommendation-header"]}>
        <img src="assets/heart.png" alt="Trending" />
        <p>For You!</p>
      </div>
      <div className={styles["recommended-products"]}>
        {recommended_products.map((product, idx) => (
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
      </div>
    </div>
  );
};
