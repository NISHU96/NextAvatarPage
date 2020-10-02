import styles from "./Banner.module.scss";

export default () => {
  return (
    <div className={styles["banner-container"]}>
      <div className={styles["banner-text"]}>
        <h2>{"Rock the bump in style".toUpperCase()}</h2>
        <span className={styles["banner-underline"]}>
          Shop from our Maternity Range
        </span>
        <div className={styles["banner-btn"]}>Shop Now</div>
      </div>
    </div>
  );
};
