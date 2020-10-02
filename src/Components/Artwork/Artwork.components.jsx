import styles from "./Artwork.module.scss";

export default () => {
  return (
    <div className={styles["artwork-container"]}>
      <div className={styles["first-container"]}>
        <div className={styles.logo}>
          <img src="assets/logo.png" alt="logo" />
        </div>
        <div className={styles["artwork-text"]}>
          <p className={styles["heading-text"]}>Welcome to Arktastic.com!</p>
          <p className={styles["grey-text"]}>Your one stop shop.</p>
          <p className={styles["body-text"]}>
            Buy Online <br></br>at your convinience
          </p>
          <p className={styles["grey-text"]}>OR</p>
          <p className={styles["body-text"]}>
            Gift someone from our huge range of brands
            <br></br>and fashion accesories
          </p>
        </div>
        <div className="artwork">
          <img src="assets/store.png" alt="Trending" />
        </div>
      </div>
      <div className={styles["second-container"]}>
        <img src="assets/shipping.png" alt="logo" />
        <div className={styles["second-text"]}>
          <p>
            Get your parcels delivered<br></br> express anywhere worldwide
            <br></br> through our trusted delivery<br></br> partners.
          </p>
        </div>
      </div>
    </div>
  );
};
