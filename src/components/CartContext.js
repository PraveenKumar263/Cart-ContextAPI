import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    setCart(prevCart => [...prevCart, productToAdd])
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateItemQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex(item => item.id === productId);
      const newCart = [...prevCart];
      if (index > -1) {
        newCart[index] = {
          ...newCart[index], quantity: newQuantity
        }
      }
      return newCart;
    })
  }

  return (
    // Context provider
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
