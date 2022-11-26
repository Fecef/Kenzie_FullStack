// fazer os imports
import { createContext, useState } from "react";

// criar o context
export const CartContext = createContext([]);

// criar o provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // criar a lógica para adicionar
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // criar a lógica para remover
  const removeFromCart = (item) => {
    const newCart = cart.filter((itemOnCart) => itemOnCart.name !== item.name);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
