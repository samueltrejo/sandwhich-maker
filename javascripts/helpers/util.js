let cart = [];

const addToCart = (ingredient) => {
  cart.push(ingredient);
  cartBuilder(cart);
};

const removeFromCart = (ingredientType) => {
  let tempArray = [];
  cart.forEach((item) => {
    if(ingredientType !== item.type) {
      tempArray.push(item);
    }
  })
  cart = tempArray;
  cartBuilder(cart);
}

const cartBuilder = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="d-flex justify-content-between">`
    domString += `<div>${item.type}</div>`
    domString += `<div>${item.price}</div>`
    domString += `</div>`
  })
  printToDom('bread-container', domString);
}

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

export default {addToCart, removeFromCart};