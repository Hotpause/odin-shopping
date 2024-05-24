import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProducts = prevCart.find(
        (item) => item.product.id === product.id
      );
      if (existingProducts) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
  };

  return (
    <div className="app">
      <Navigation
        cartItemCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
      />
      <Outlet context={{ addToCart, cart }} />
    </div>
  );
}

export default App;

// const addToCart = (product, quantity) => {
//   setCart((prevCart) => {
//     const existingProduct = prevCart.find(
//       (item) => item.product.id === product.id
//     );
//     if (existingProduct) {
//       return prevCart.map((item) =>
//         item.product.id === product.id
//           ? { ...item, quantity: item.quantity + quantity }
//           : item
//       );
//     }
//     return [...prevCart, { product, quantity }];
//   });
// };
