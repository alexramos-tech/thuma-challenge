const sizes = ["twin", "full", "queen", "king", "cali-king"];
const colors = ["walnut", "natural"];

export const variationChoices = {
  color: colors,
  size: sizes
};

function makeBed({ color, size }) {
  return {
    name: "bed",
    variation: {
      color,
      size
    }
  };
}

function makeMattress({ size }) {
  return {
    name: "mattress",
    variation: {
      size
    }
  };
}

function makeNightstand({ color }) {
  return {
    name: "nightstand",
    variation: {
      color
    }
  };
}

export const products = ["bed", "mattress", "nightstand"];

export const productConstructors = {
  bed: makeBed,
  mattress: makeMattress,
  nightstand: makeNightstand
};

export const productVariation = {
  bed: ["color", "size"],
  mattress: ["size"],
  nightstand: ["color"]
};
