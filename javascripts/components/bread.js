import print from '../helpers/util.js'

const bread = {
  white: 0.70,
  wheat: 0.75,
  grain: 0.90
};

const addBread = (event) => {
  let ingredient = {};
  const breadType = event.target.id;
  console.log(bread.breadType);
  ingredient.type = breadType;
  ingredient.price = bread[breadType];
  print.addToCart(ingredient);
};

export default {addBread};