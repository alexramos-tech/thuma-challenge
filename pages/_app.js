import "../styles.css";
import CartApi from "../api/cart";
import CartDebug from "../components/CartDebug";
import Nav from "../components/Nav";
import CartContext from "../contexts/CartContext";
import { useSessionStorageCart } from "../hooks/useSessionStorageCart";

const { getCart } = CartApi;

export default function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useSessionStorageCart(getCart(2));
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Nav />
        <CartDebug cart={cart} allowChanges={true} setCart={setCart} />
        <div style={{ width: "calc(100% - 18.5em)" }}>
          <Component {...pageProps} cart={cart} setCart={setCart}/>
        </div>
      </CartContext.Provider>
    </div>
  );
}
