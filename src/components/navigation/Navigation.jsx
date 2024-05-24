import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Navigation.module.css";

const Navigation = ({ cartItemCount }) => {
  return (
    <div className={styles.nav}>
      <Link to="/shopping">Shopping Page</Link>
      <Link to="/">Home Page</Link>
      <Link to="/cart">Cart ({cartItemCount})</Link>
    </div>
  );
};

Navigation.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
};

export default Navigation;
