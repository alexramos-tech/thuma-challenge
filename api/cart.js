import { productConstructors, variationChoices } from "./products";

const bedSizes = variationChoices.size;
const bedColors = variationChoices.color;

const CartApi = {

  getCart: (size) => {
    let cart = [];
    if (size) {
      for (let i = 0; i < size; i++) {
        cart.push(getRandomItem());
      }
    }
    return cart;
  },
  
  getRandomCart: () => {
    const rand = getRandomInt(4) + 1;
    const cartSize = rand % 3 === 0 ? 2 : rand % 2 === 0 ? 1 : 0;
    return getCartOfSize(cartSize);
  },

  removeItem: (cart, index) => {
    const cartWithOutItem = [...cart];
    cartWithOutItem.splice(index, 1);
    return cartWithOutItem;
  },
  
  addItem: (cart, productType, variation) => {
    const newItem = productConstructors[productType](variation);
    const cartWithNewItem = [...cart, newItem];
    return cartWithNewItem;
  }

};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomItem = () => {
  return productConstructors.bed({
    size: bedSizes[getRandomInt(bedSizes.length)],
    color: bedColors[getRandomInt(bedColors.length)]
  });
};

const getCartOfSize = (size) => {
  let cart = [];
  for (let i = 0; i < size; i++) {
    cart.push(getRandomItem());
  }
  return cart;
};

export default CartApi;
