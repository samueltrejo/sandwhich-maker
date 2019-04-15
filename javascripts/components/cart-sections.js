import sections from '../helpers/button-events.js'

const sectionButtons = {
  breadSection: document.getElementById('breadButton'),
  meatSection: document.getElementById('meatButton'),
  cheeseSection: document.getElementById('cheeseButton'),
  condimentSection: document.getElementById('condimentButton'),
  veggieSection: document.getElementById('veggieButton'),
  checkoutButton: document.getElementById('checkoutButton')
}

const buttonArray = ['breadSection', 'meatSection', 'cheeseSection', 'condimentSection', 'veggieSection', 'checkoutButton'];

let currentSection = 0;
const sectionArray = [
  {
    showSection: () => {
      hideSections()
      dimButtons()
      showSection(sections.breadSection);
    }
  },
  {
    showSection: () => {
      hideSections()
      dimButtons()
      showSection(sections.meatSection);
    }
  },
  {
    showSection: () => {
      hideSections()
      dimButtons()
      showSection(sections.cheeseSection);
    }
  },
  {
    showSection: () => {
      hideSections()
      dimButtons()
      showSection(sections.condimentSection);
    }
  },
  {
    showSection: () => {
      hideSections()
      dimButtons()
      showSection(sections.veggieSection);
    }
  },
  {
    showSection: () => {
      dimButtons()
      $('#exampleModal').modal('toggle')
    }
  },
];

// const changeSection = (event) => {
//   const targetValue = event.target.value
//   if(targetValue !== undefined && targetValue !== ''){
//     for(let section in sections) {
//       if(sections[section].className !== undefined){
//         sections[section].className = 'row flex-column mx-0 bg-white d-none'
//         event.target.className = 'btn btn-dark rounded-0'
//       }
//     }
//     sections[targetValue].className = 'row flex-column mx-0 bg-white'
//     event.target.className = 'btn btn-success rounded-0'
//   }
//   //change next section button to green, and previous button to dark
//   //hide current section and show next section
// }

const showSection = (section) => {
  section.className = 'row flex-column mx-0 bg-white';
}

const hideSections = () => {
  for(let section in sections) {
    if(sections[section].className !== undefined){
      sections[section].className = 'row flex-column mx-0 bg-white d-none'
    }
  }
}

const dimButtons = () => {
  for(let button in sectionButtons) {
    sectionButtons[button].className = 'btn btn-dark rounded-0'
  }
}

const changeSection = (event) => {
  let newSection = event.target.value;
  sectionArray[newSection].showSection();
  event.target.className = 'btn btn-success rounded-0'
  currentSection = newSection;
}

const incrementSection = () => {
  currentSection++;
  sectionArray[currentSection].showSection();
  sectionButtons[buttonArray[currentSection]].className = 'btn btn-success rounded-0';
}

export default {changeSection, incrementSection};