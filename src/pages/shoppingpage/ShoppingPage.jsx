import { useEffect, useState } from "react";
import fetchProducts from "../../services/Api.js";
import ProductCard from "../../components/card/ProductCard.jsx";
import { useOutletContext } from "react-router-dom";

const ShoppingPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useOutletContext();
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setError(null);
      })
      .catch((err) => setError("Error message in .catch"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading baby...</div>; // Loading indicator
  }

  if (error) {
    return <div>Error baby: {error}</div>; // Error message
  }

  return (
    <div>
      <h1>Shopping</h1>
      <div className="productList">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
