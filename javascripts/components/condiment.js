import print from '../helpers/util.js'

const condiment = {
  mayonaise: 0.70,
  ketchup: 0.75,
  mustard: 0.90,
  ranch: 0.95,
  hotsauce: 0.59
};

const addCondiment = (event) => {
  const checked = event.target.checked;
  const condimentType = event.target.id;
  
  if(checked) {
    let ingredient = {};
    ingredient.type = condimentType;
    ingredient.price = condiment[condimentType];
    print.addToCart(ingredient);
  } else if (!checked) {
    print.removeFromCart(condimentType);
  }
};

export default {addCondiment};