import print from '../helpers/util.js'

const bread = {
  white: 0.70,
  wheat: 0.75,
  grain: 0.90,
  italian: 0.95,
  flatbread: 0.59
};

const addBread = (event) => {
  const checked = event.target.checked;
  const breadType = event.target.value;
  
  if(checked) {
    let ingredient = {};
    ingredient.type = breadType;
    ingredient.price = bread[breadType];
    print.addToCart(ingredient);
  } else if (!checked) {
    print.removeFromCart(breadType);
  }
};

export default {addBread};