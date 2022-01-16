import { getRandomCart } from "../api/cart";

export default function CartDebug({ cart, setCart }) {
  return (
    <div
      style={{
        position: "absolute",
        background: "white",
        right: 0,
        border: "1px solid",
        borderRight: 0,
        padding: "1em",
        minWidth: "17em"
      }}
    >
      <p>Your Cart</p>
      <ul
        suppressHydrationWarning
        style={{
          display: "inline-block",
          padding: "1em 2em",
          margin: 0
        }}
      >
        {cart.length === 0 ? (
          <li suppressHydrationWarning>The Cart is Empty</li>
        ) : (
          cart.map((cartItem, index) => (
            <li key={index} suppressHydrationWarning>
              {`${cartItem.name} -- ${Object.keys(cartItem.variation)
                .map((key) => cartItem.variation[key])
                .join(" + ")} `}
            </li>
          ))
        )}
      </ul>
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            background: "transparent",
            padding: "1em 2em",
            border: "1px solid gray"
          }}
          onClick={() => setCart(getRandomCart())}
        >
          Random Cart
          <span role="img" aria-label="randomize cart">
            ♻️
          </span>
        </button>
      </div>
    </div>
  );
}
