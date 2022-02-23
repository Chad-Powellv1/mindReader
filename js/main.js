let head = document.getElementById('header');
let help = document.getElementById('helper');
let nextButton = document.getElementById('nextButton');
let navButton = document.getElementById('navButton');
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '~'];
let resultSymbol = null;
let view = 0;


// create function to loop through symbols to create 99 possible results
   

// create function to update state
const updateState = function() {
    view++;
    updateView();
}

// create function to reset view
const resetView = function() {
    if (view === 0) {
        view++;
    } else {
        view = 0;
    }
    updateView();
}

// create function to update view
const updateView = function() {

}