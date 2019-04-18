import print from '../helpers/util.js'

const veggie = {
  lettuce: 0.55,
  spinach: 0.70,
  onions: 0.65,
  tomatoes: 0.80,
  cucumbers: 0.73
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