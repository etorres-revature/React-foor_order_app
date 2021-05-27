import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../../assets/meals.jpeg";

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>RealDealMeals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="table covered in delicious food" />
      </div>
    </Fragment>
  );
};
export default Header;
