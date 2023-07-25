// Guessing game!

// First, prompt user for a valid maximum number range.

let numRange = parseInt(prompt('Enter the maximum number.'));

while (!numRange) {
    numRange = parseInt(prompt('Invalid input, please only input numerical values.'));
}

const randomNum = Math.floor(Math.random() * numRange) + 1;

let guess = parseInt(prompt('Guessing time!'));

while (!guess) {
    guess = parseInt(prompt(`Invalid guess! Please input only a numerical value between 1 and ${numRange}`));
}




console.log(randomNum);