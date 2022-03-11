// import functions and grab DOM elements
const cityNameInput = document.getElementById('city-name-input');
const cityNameEl = document.getElementById('city-name');
const destinationDropdown = document.getElementById('destination-dropdown');
const skylineDropdown = document.getElementById('skyline-dropdown');
const collegeDropdown = document.getElementById('college-dropdown');
const countMessageEl = document.getElementById('count-message');
const destinationImgEl = document.getElementById('destination-img');
const skylineImgEl = document.getElementById('skyline-img');
const collegeImgEl = document.getElementById('college-img');
const addSloganButton = document.getElementById('add-slogan-button');
const sloganInputEl = document.getElementById('slogan-input');


// let state

let destinationCount = 0;
let skylineCount = 0;
let collegeCount = 0;
const slogans = [];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


// slogan button - when input entered then button clicked, input added to array
addSloganButton.addEventListener('click', () => {
    //determine what slogan the user typed
    const citySlogan = sloganInputEl.value;
    //adding input to array
    slogans.push(citySlogan);

    sloganInputEl.value = '';
});
