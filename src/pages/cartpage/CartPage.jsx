import React from "react";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const { cart } = useOutletContext();

  const totalBill = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <div className={styles.cartList}>
        {cart.map((item) => (
          <div key={item.product.id} className={styles.cartItem}>
            <img src={item.product.image} alt={item.product.title} />
            <div>
              <h2>{item.product.title}</h2>
              <p>Price: ${item.product.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.totalBill}>
        <h2>Total Bill: ${totalBill.toFixed(2)}</h2>
      </div>
      <button className={styles.checkoutButton}>Proceed to Checkout</button>
    </div>
  );
};

CartPage.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CartPage;
