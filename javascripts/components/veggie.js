import print from '../helpers/util.js'

const veggie = {
  lettuce: 0.70,
  spinach: 0.75,
  onions: 0.90,
  tomatoes: 0.95,
  cucumbers: 0.59
};

const addVeggie = (event) => {
  const checked = event.target.checked;
  const veggieType = event.target.value;
  
  if(checked) {
    let ingredient = {};
    ingredient.type = veggieType;
    ingredient.price = veggie[veggieType];
    print.addToCart(ingredient);
  } else if (!checked) {
    print.removeFromCart(veggieType);
  }
};

export default {addVeggie};