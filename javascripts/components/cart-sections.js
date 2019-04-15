import sections from '../helpers/button-events.js'

const changeSection = (event) => {
  const targetValue = event.target.value
  if(targetValue !== undefined && targetValue !== ''){
    for(let section in sections) {
      if(sections[section].className !== undefined){
        sections[section].className = 'row flex-column mx-0 bg-white d-none'
        // document.getElement
        // event.target.className = 'btn btn-dark rounded-0'
      }
    }
    sections[targetValue].className = 'row flex-column mx-0 bg-white'
    event.target.className = 'btn btn-success rounded-0'
  }
  //change next section button to green, and previous button to dark
  //hide current section and show next section
}

export default {changeSection};