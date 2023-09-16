import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const id = item.id;
    isInCart(id)
      ? ((cart[indexOfProductInCart(id)].quantity += quantity),
        setCart([...cart]))
      : ((item.quantity = quantity), setCart([...cart, item]));
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const indexOfProductInCart = (id) => {
    return cart.findIndex((product) => product.id === id);
  };

  const minorQuantity = (id) => {
    cart[indexOfProductInCart(id)].quantity > 1 &&
      indexOfProductInCart(id) != -1 &&
      ((cart[indexOfProductInCart(id)].quantity -= 1), setCart([...cart]));
  };

  const removeItem = (id) => {
    cart.splice(indexOfProductInCart(id), 1);
    setCart([...cart]);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        isInCart,
        addItem,
        indexOfProductInCart,
        removeItem,
        clear,
        minorQuantity,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
