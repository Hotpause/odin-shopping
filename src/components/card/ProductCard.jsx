/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./ProductCard.module.css";
const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const updateValue = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <div>
        <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>
          -
        </button>
        <input type="number" value={quantity} onChange={updateValue} />
        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      </div>
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageg: PropTypes.string.isRequired,
  }),
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
