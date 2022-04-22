import "./styles.css";
import ProductInfo from "./Product";
import { products } from "./Inventory";
import { useState } from "react";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <div className="App">
      <h2> Shopping Cart Demo</h2>
      <div>Total items in the cart: {cartItems.length}</div>
      <div>Total price: {cartTotal} USD</div>

      <div className="allProducts">
        {products.map((product) => (
          <ProductInfo
            key={product.id}
            id={product.id}
            emoji={product.emoji}
            name={product.name}
            price={product.price}
            cartItems={cartItems}
            setItems={setCartItems}
            cartTotal={cartTotal}
            setTotal={setCartTotal}
          />
        ))}
      </div>
    </div>
  );
}
