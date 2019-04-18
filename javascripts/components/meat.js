import print from '../helpers/util.js'

const meat = {
  chicken: 0.97,
  roastbeef: 1.20,
  bacon: 0.99,
  tuna: 0.89,
  tofu: 0.57
};

const addMeat = (event) => {
  const checked = event.target.checked;
  const meatType = event.target.value;
  
  if(checked) {
    let ingredient = {};
    ingredient.type = meatType;
    ingredient.price = meat[meatType];
    print.addToCart(ingredient);
  } else if (!checked) {
    print.removeFromCart(meatType);
  }
};

export default {addMeat};