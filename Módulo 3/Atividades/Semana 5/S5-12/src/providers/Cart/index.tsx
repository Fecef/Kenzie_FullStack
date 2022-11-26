import { createContext, ReactNode, useContext, useState } from "react";

interface iCartProviderProps {
  children: ReactNode;
}

interface iCartContext {
  cart: iCart[];
  addProduct: (product: iCart) => void;
  deleteProduct: (productToBeDeleted: iCart) => void;
}

interface iCart {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const CartContext = createContext<iCartContext>({} as iCartContext);

export const CartProvider = ({ children }: iCartProviderProps) => {
  const [cart, setCart] = useState<iCart[]>([]);

  const addProduct = (product: iCart) => {
    setCart([...cart, product]);
  };

  const deleteProduct = (productToBeDeleted: iCart) => {
    const newCart = cart.filter(
      (product) => product.title !== productToBeDeleted.title
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
