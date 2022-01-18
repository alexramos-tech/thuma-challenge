import CartApi from "../api/cart";
import CloseButton from "./CloseButton";

const { removeItem, getRandomCart } = CartApi;

export default function CartDebug({ cart, setCart }) {
  return (
    <div className="cart-container">
      <p>Your Cart</p>
      <ul suppressHydrationWarning className="cart-list">
        {cart.length === 0 ? (
          <li suppressHydrationWarning>The Cart is Empty</li>
        ) : (
          cart.map((cartItem, index) => (
            <li key={index} suppressHydrationWarning>
              <div>
                {`${cartItem.name} -- ${Object.keys(cartItem.variation)
                  .map((key) => cartItem.variation[key])
                  .join(" + ")} `}
                <CloseButton onClick={() => setCart(removeItem(cart, index))} />      
              </div>
            </li>
          ))
        )}
      </ul>
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setCart(getRandomCart())}>
          Random Cart
          <span role="img" aria-label="randomize cart">
            ♻️
          </span>
        </button>
      </div>
    </div>
  );
}
