import bread from '../components/bread.js';
import meat from '../components/meat.js';
import cheese from '../components/cheese.js';
import condiment from '../components/condiment.js';
import veggie from '../components/veggie.js';
import checkout from './util.js'
import advance from '../components/cart-sections.js'

const breadSection = document.getElementById('bread');
const meatSection = document.getElementById('meat');
const cheeseSection = document.getElementById('cheese');
const condimentSection = document.getElementById('condiment');
const veggieSection = document.getElementById('veggie');
const checkoutButton = document.getElementById('checkout-button');
const navCheckoutButton = document.getElementById('nav-checkout');
const otherNavCheckout = document.getElementById('checkoutButton')
const sectionButtons = document.getElementById('section-buttons');
const nextSectionButton = document.getElementById('next-button');

const attachEvents = () => {
  breadSection.addEventListener('click', bread.addBread);
  meatSection.addEventListener('click', meat.addMeat);
  cheeseSection.addEventListener('click', cheese.addCheese);
  condimentSection.addEventListener('click', condiment.addCondiment);
  veggieSection.addEventListener('click', veggie.addVeggie);
  checkoutButton.addEventListener('click', checkout.displayTotal);
  navCheckoutButton.addEventListener('click', checkout.displayTotal);
  otherNavCheckout.addEventListener('click', checkout.displayTotal);
  sectionButtons.addEventListener('click', advance.changeSection);
  nextSectionButton.addEventListener('click', advance.incrementSection);
};

export default {attachEvents, breadSection, meatSection, cheeseSection, condimentSection, veggieSection};