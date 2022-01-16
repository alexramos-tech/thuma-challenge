const sizes = ["twin", "full", "queen", "king", "cali-king"];
const colors = ["walnut", "natural"];

export const variationChoices = {
  color: colors,
  size: sizes
};

export function makeBed({ color, size }) {
  return {
    name: "bed",
    variation: {
      color,
      size
    }
  };
}

export function makeMattress({ size }) {
  return {
    name: "mattress",
    variation: {
      size
    }
  };
}

export const products = ["bed", "mattress"];

export const productConstructors = {
  bed: makeBed,
  mattress: makeMattress
};

export const productVariation = {
  bed: ["color", "size"],
  mattress: ["size"]
};
