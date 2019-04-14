import print from '../helpers/util.js'

const meat = {
  chicken: 0.70,
  roastbeef: 0.75,
  bacon: 0.90,
  tuna: 0.95,
  tofu: 0.59
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