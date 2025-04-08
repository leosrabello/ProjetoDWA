import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (marmita, quantidade) => {
    setCartItems((prev) => {
      const index = prev.findIndex(item => item.id === marmita.id);

      if (index !== -1) {
        // Já existe no carrinho: somar quantidade
        const newCart = [...prev];
        newCart[index].quantidade += quantidade;
        return newCart;
      } else {
        // Novo item
        return [...prev, { ...marmita, quantidade }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };
  
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      ).filter(item => item.quantidade > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
