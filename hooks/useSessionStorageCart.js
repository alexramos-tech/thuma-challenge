import { useState } from "react";

const useSessionStorageCart = (initialCart) => {
  const [cart, innerSetCart] = useState(() => {
    try {
      const storedCart = window.sessionStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : initialCart;
    } catch (error) {
      return initialCart;
    }
  });

  const setCart = (newCart) => {
    const newCartValue = newCart instanceof Function ? newCart(cart) : newCart;
    innerSetCart(newCartValue);
    try {
      window.sessionStorage.setItem("cart", JSON.stringify(newCartValue));
    } catch (error) {}
  }

  return [cart, setCart];
};

export { useSessionStorageCart };
