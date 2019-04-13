import print from '../helpers/util.js'

const cheese = {
  american: 0.70,
  swiss: 0.75,
  cheddar: 0.90,
  gorgonzola: 0.95,
  parmesan: 0.59
};

const addCheese = (event) => {
  const checked = event.target.checked;
  const cheeseType = event.target.id;
  
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