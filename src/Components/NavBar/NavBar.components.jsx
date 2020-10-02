import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./NavBar.module.scss";

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    backgroundColor: "#EDF0F4",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
}));
export default (props) => {
  const classes = useStyles(props);
  return (
    <Paper elevation={3} className={classes.paperRoot}>
      <div className={styles.logo}>
        <img src="assets/logo_nofont.png" alt="logo" />
      </div>
      <div className={styles.avatar}>
        <img alt="Women" src="assets/avataaars.png" />
      </div>
      <div className={styles["nav-list"]}>
        <ul>
          <li>
            <img src="assets/user.png" alt="profile" />
          </li>
          <li>
            <img src="assets/heart.png" alt="wishlist" />
          </li>
          <li>
            <img src="assets/shopping_cart.png" alt="cart" />
          </li>
        </ul>
      </div>
    </Paper>
  );
};
