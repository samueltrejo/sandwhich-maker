import print from '../helpers/util.js'

const condiment = {
  mayonaise: 0.15,
  ketchup: 0.15,
  mustard: 0.15,
  ranch: 0.20,
  hotsauce: 0.25
};

const addCondiment = (event) => {
  const checked = event.target.checked;
  const condimentType = event.target.value;
  
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