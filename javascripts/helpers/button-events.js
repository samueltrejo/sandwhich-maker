import bread from '../components/bread.js';
import meat from '../components/meat.js';
import cheese from '../components/cheese.js';
import condiment from '../components/condiment.js';
import veggie from '../components/veggie.js';

const breadSection = document.getElementById('bread');
const meatSection = document.getElementById('meat');
const cheeseSection = document.getElementById('cheese');
const condimentSection = document.getElementById('condiment');
const veggieSection = document.getElementById('veggie');

const attachEvents = () => {
  breadSection.addEventListener('click', bread.addBread);
  meatSection.addEventListener('click', meat.addMeat);
  cheeseSection.addEventListener('click', cheese.addCheese);
  condimentSection.addEventListener('click', condiment.addCondiment);
  veggieSection.addEventListener('click', veggie.addVeggie);
};

export default {attachEvents};