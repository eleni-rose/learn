// function practice with multiple arguments

function subtractor(firstNum, secondNum) {
    let result = firstNum - secondNum;
    return result;
}

let firstNum = prompt("Enter your number.");
let secondNum = prompt("Enter your next number.");

let answer = subtractor(firstNum, secondNum);

console.log(`Calculator says that ${answer} is the subtraction result!`);