import bread from '../components/bread.js';

const whiteButton = document.getElementById('white');
const wheatButton = document.getElementById('wheat');
const grainButton = document.getElementById('grain');

const attachEvents = () => {
  whiteButton.addEventListener('click', bread.addBread);
  wheatButton.addEventListener('click', bread.addBread);
  grainButton.addEventListener('click', bread.addBread);
};

export default {attachEvents};