import { useMemo, useState } from "react";
import ProductsApi from "../../api/products";
import CartApi from "../../api/cart";

const { addItem  } = CartApi;
const{ products, productVariation, variationChoices } = ProductsApi;

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ProductPage({ handle, cart, setCart }) {
  const attributes = useMemo(() => {
    return productVariation[handle].reduce((acc, variationKey) => {
      acc[variationKey] = variationChoices[variationKey];
      return acc;
    }, {});
  }, [handle]);

  const [chosenVariant, setChosenVariant] = useState({});

  const onValueChange = (attributeKey, attributeValue) => {
    setChosenVariant((oldVariant) => ({
      ...oldVariant,
      [attributeKey]: attributeValue
    }));
  }

  const clearFormValues = (chosenVariant) => {
    const attributeKeys = Object.keys(chosenVariant);
    for (const key of attributeKeys) {
      onValueChange(key, undefined)
    }
  }

  const addToCart = (e) => {
    e.preventDefault();
    setCart(addItem(cart, handle, chosenVariant));
    clearFormValues(chosenVariant);
  }

  return (
    <>
      <h1>{capitalize(handle)} product page</h1>
      <div style={{ textAlign: "center" }}>
        <img src="https://via.placeholder.com/300x200" alt="placeholder" />
      </div>
      <form onSubmit={addToCart}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {Object.keys(attributes).map((attributeKey) => {
              const attributeValuePicker = attributes[attributeKey].map(
                (attributeValue) => (
                  <label key={attributeValue} style={{ lineHeight: 2 }}>
                    <input
                      required={true}
                      checked={chosenVariant[attributeKey] === attributeValue}
                      type="radio"
                      name={attributeKey}
                      value={attributeValue}
                      onChange={(e) => onValueChange(attributeKey, e.target.value)}
                    />
                    {attributeValue}
                  </label>
                )
              );
              return (
                <div key={attributeKey}>
                  <h2
                    style={{
                      textAlign: "center",
                      textTransform: "capitalize",
                      textDecoration: "underline"
                    }}
                  >
                    {attributeKey}
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {attributeValuePicker}
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: "2em" }}>
            <button type="submit">
              Add To Cart
            </button>
        </div>
      </form>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  return { props: { ...params, key: params.handle } };
};

export const getStaticPaths = async () => {
  return {
    paths: products.map((handle) => ({
      params: { handle }
    })),
    fallback: false
  };
};