const sizes = ["twin", "full", "queen", "king", "cali-king"];
const colors = ["walnut", "natural"];

const makeBed = ({ color, size }) => {
  return {
    name: "bed",
    variation: {
      color,
      size
    }
  };
};

const makeMattress = ({ size }) => {
  return {
    name: "mattress",
    variation: {
      size
    }
  };
};

const makeNightstand = ({ color }) => {
  return {
    name: "nightstand",
    variation: {
      color
    }
  };
};

const ProductsApi = {
  
  products: ["bed", "mattress", "nightstand"],

  productConstructors: {
    bed: makeBed,
    mattress: makeMattress,
    nightstand: makeNightstand
  },

  productVariation: {
    bed: ["color", "size"],
    mattress: ["size"],
    nightstand: ["color"]
  },

  variationChoices: {
    color: colors,
    size: sizes
  }

};

export default ProductsApi;
