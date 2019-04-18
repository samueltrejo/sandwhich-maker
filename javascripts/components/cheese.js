import print from '../helpers/util.js'

const cheese = {
  american: 0.23,
  swiss: 0.25,
  cheddar: 0.21,
  gorgonzola: 0.40,
  parmesan: 0.45
};

const addCheese = (event) => {
  const checked = event.target.checked;
  const cheeseType = event.target.value;
  
  if(checked) {
    let ingredient = {};
    ingredient.type = cheeseType;
    ingredient.price = cheese[cheeseType];
    print.addToCart(ingredient);
  } else if (!checked) {
    print.removeFromCart(cheeseType);
  }
};

export default {addCheese};