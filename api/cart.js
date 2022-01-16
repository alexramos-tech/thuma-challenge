import { productConstructors, variationChoices } from "./products";

const bedSizes = variationChoices.size;
const bedColors = variationChoices.color;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomItem() {
  return productConstructors.bed({
    size: bedSizes[getRandomInt(bedSizes.length)],
    color: bedColors[getRandomInt(bedColors.length)]
  });
}

export function getCartOfSize(size) {
  let cart = [];
  for (let i = 0; i < size; i++) {
    cart.push(getRandomItem());
  }
  return cart;
}

export function getRandomCart() {
  const rand = getRandomInt(4) + 1;
  const cartSize = rand % 3 === 0 ? 2 : rand % 2 === 0 ? 1 : 0;
  return getCartOfSize(cartSize);
}

export function removeItem(cart, index) {
  const cartWithOutItem = [...cart];
  cartWithOutItem.splice(index, 1);
  return cartWithOutItem;
}

export function addItem(cart, productType, variation) {
  const newItem = productConstructors[productType](variation);
  const cartWithNewItem = [...cart, newItem];
  return cartWithNewItem;
}
