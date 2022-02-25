let head = document.getElementById('header');
let help = document.getElementById('helper');
let nextButton = document.getElementById('nextButton');
let navButton = document.getElementById('navButton');
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '~', '+', '=', '}', "<", '/', ">",'?'];
let playerSymbol = '';
let view = 0;

// generate numbers and symbols for app results
const generateResults = function () {
	let result = '';
	// randomize players symbol
	playerSymbol = symbols[Math.floor(Math.random() * symbols.length)];
	for (let i = 0; i <= 99; i++) {
		if (i % 9 === 0) {
			result += i + ' - ' + playerSymbol + '\n';
		} else {
			let otherSymbol = symbols[Math.floor(Math.random() * symbols.length)];
			result += i + ' - ' + otherSymbol + '\n';
		}
	}
	return result + ' . . . ';
};

// create function to update state
const updateState = function () {
	view++;
	updateView();
};

// create function to reset view
const resetView = function () {
	// conditional statement, if current view is zero navigation button click will update state
	if (view === 0) {
		view++;
		// conditional statement to reset state to view zero
	} else {
		view = 0;
	}
	updateView();
};

// create function to update view
const updateView = function () {
	switch (view) {
		case 0:
			head.innerText = 'I can read your mind';
			help.style.visibility = 'hidden';
			nextButton.style.visibility = 'hidden';
			navButton.innerText = 'Go';
			break;

		case 1:
			head.innerText = 'Pick a number from \n 01 - 99';
			help.innerText = 'when you have your number click next';
			help.style.visibility = 'visible';
			nextButton.style.visibility = 'visible';
			nextButton.innerText = 'NEXT';
			navButton.innerHTML = '<img src= "./img/refresh.png"  width="45" />';
			break;

		case 2:
			head.innerText = 'Add both digits together to get a new number';
			help.innerText = 'Ex: 14 is 1 + 4 = 5';
			help.style.visibility = 'visible';
			nextButton.innerText = 'NEXT';
			navButton.innerHTML = '<img src= "./img/refresh.png"  width="45" />';
			break;

		case 3:
			head.innerText = 'Subtract \n your new number from the original number';
			help.innerText = 'Ex: 14 - 5 = 9 \n click next to proceed';
			help.style.visibility = 'visible';
			nextButton.innerText = 'NEXT';
			nextButton.style.visibility = 'visible';
			navButton.innerHTML = '<img src= "./img/refresh.png"  width="45" />';
			break;

		case 4:
			head.innerText = generateResults();
			head.style.overflowY= 'auto';
			help.innerText =
				'Find your new number. \n Note the symbol beside the number';
			help.style.visibility = 'visible';
			nextButton.innerText = 'REVEAL';
			nextButton.style.visibility = 'visible';
			navButton.innerHTML = '<img src= "./img/refresh.png"  width="45" />';
			break;

		case 5:
			head.innerText = playerSymbol;
			help.innerText = 'Your symbol is: ' + '\n' + playerSymbol;
			help.style.visibility = 'visible';
			nextButton.style.visibility = 'hidden';
			navButton.innerHTML = '<img src= "./img/refresh.png"  width="45" />';
	}
};

navButton.addEventListener('click', resetView);
nextButton.addEventListener('click', updateState);

const init = function () {
	updateView();
};
