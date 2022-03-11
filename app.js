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

// input for city name
cityNameInput.addEventListener('input', () => {
  //   - update the welcome element with the city name typed
    cityNameEl.textContent = cityNameInput.value;
});

// slogan button - when input entered then button clicked, input added to array
addSloganButton.addEventListener('click', () => {
    //determine what slogan the user typed
    const citySlogan = sloganInputEl.value;
    //adding input to array
    slogans.push(citySlogan);

    displaySlogans();

    sloganInputEl.value = '';
});

function displaySlogans() {
    //create list of slogans 
    const listEl = document.getElementById('list');

    //print out list of slogans
    listEl.textContent = '';

    //every time a new slogan is input, create a new div that displays it
    for (let slogan of slogans) {
        const div = document.createElement('div');
  
        div.classList.add('slogan');
        div.textContent = slogan;
    // add the new slogan to the old list
        listEl.append(div);
    }  
}

destinationDropdown.addEventListener('change', () => {
  // - count how many times the destination is changed
    destinationCount++;
  
  // - destination image changes to what the user chooses
    destinationImgEl.src = `assets/destination-${destinationDropdown.value}.png`;
    displayCountStats();
});

skylineDropdown.addEventListener('change', () => {
  // - count how many times the skyline is changed
    skylineCount++;
  
  // - skyline image changes to what the user chooses
    skylineImgEl.src = `assets/skyline-${skylineDropdown.value}.png`;
    displayCountStats();
});

collegeDropdown.addEventListener('change', () => {
  // - count how many times the college is changed
    collegeCount++;
  
  // - college image changes to what the user chooses
    collegeImgEl.src = `assets/college-${collegeDropdown.value}.png`;
    displayCountStats();
});

//create function that creates a text string showing what changes have occurred 
function displayCountStats() {
    countMessageEl.textContent = `You changed the destination ${destinationCount} times, the skyline ${skylineCount} times and the college ${collegeCount} times`;
}

