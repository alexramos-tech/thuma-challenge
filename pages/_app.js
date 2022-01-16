import { getCartOfSize } from "../api/cart";
import CartDebug from "../components/CartDebug";
import Nav from "../components/Nav";
import CartContext from "../contexts/CartContext";
import { useSessionStorageCart } from "../hooks/useSessionStorageCart";

export default function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useSessionStorageCart(getCartOfSize(2));
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Nav />
        <CartDebug cart={cart} allowChanges={true} setCart={setCart} />
        <div style={{ width: "calc(100% - 18.5em)" }}>
          <Component {...pageProps} />
        </div>
      </CartContext.Provider>
    </div>
  );
}
