// TODO: Write a number guessing game.
//
// Rules: The game will generate a number between 1 and 10,
// inclusive. So, it might generate a 1. Or it might generate
// a 10, or any whole number in between.
//
// The user should enter a number into the text box and then
// click "guess".
//
// You should then tell the user (via alert or another way)
// if her guess was too big, too small, or just right!
//
//
// Look at the HTML, and note that you'll need to
// write two functions:
//
// setGuess(guessValueAsString)
// guess()
//
// Feel free to rename the guessValueAsString parameter

var randomNum = Math.ceil(Math.random() * 10);
console.log(randomNum);

var counter = 0;

var enteredNum = 0;

function setGuess(entered) {
	enteredNum = Number(entered);
};

var addResult = document.getElementsByClassName('guess-result')[0];
var changeContent = addResult.innerHTML;
var addCounter = document.getElementById("guess-count");

// var newEl = document.createElement('h3');
// var addTextNewEl = document.createTextNode('You have guessed this many times: ')
// newEl.appendChild(addTextNewEl);
// addResult.appendChild(newEl);

function guess() {
	if (enteredNum < randomNum)  {
		addResult.innerHTML = "You guessed too low. </br>";
		counter = counter += 1;	
		addCounter.textContent = "You have guessed this many times: " + counter;
	} else if (enteredNum > randomNum) {
		addResult.innerHTML = "You guessed too high. </br>";
		counter = counter += 1;	
		console.log(counter);	
		addCounter.textContent = "You have guessed this many times: " + counter;
	} else {
		addResult.innerHTML = "You guessed correct. </br>";
	}
}




