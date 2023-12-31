//MISSING/INCORRECT SYNTAX EXERCISES
//EASY - Only one thing is incorrect or missing
//1.
greet(name) {
    return "Hello " + name;
} 
// "function" keyword is missing.

//2.
function sum(a, b) {
    a + b;
} // "return" keyword is missing.

//3.
function square {
    return n * n;
} // Missing parameter list.


//MEDIUM - 2 things incorrect or missing
//1. 
function reverseString[str] {
    let reversed = str.split('').reverse().join('');
    reversed;
} 
// "return" keyword is missing, and the square brackets around "str" should be parenthesis

//2.
factorial(n) {
    if (n = 0 || n === 1) return 1;
    return n * factorial(n - 1);
} 
// Single equals in the condition of the if statement should be triple equals, and needs a function keyword or arrow notation

//3.
function findMax(arr) {
    max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max){
            max : arr[i];
        }
    }
    return max;
} 
// Semicolon should be an equals sign, and let is missing in front of max.

//4.
calculatePrice = (price, isMember) => {
    let discount = isMember ? 0.2, 0;
    let finalPrice = price - (price * discount);
    console.log(finalPrice);
    return finalprice.toFixed(2);
}
// The comma should be a colon, and finalprice needs an upper case "P" in the last line

//HARD
//1.
//This function takes in a string and outputs a new version of the string
//where all letters have been made lower case except for one.
function randomUpperCase(word){
    let randNumber = Math.floor`Math.random() * word.length`;
    let lowerCaseWord = word.toLowerCase();
    const leftSide = lowerCaseWord.slice(0, randNumber);
    const rightSide = lowerCaseWord.slice(randNumber + 1);
    const upperLetter = lowerCaseWord[randNumber].toUpperCase;
    return leftSide + upperLetter + rightSide;
}
//Backticks should be parenthesis and .toUpperCase needs parenthesis

//2.
function averageOfPositiveNumbers(numbers) {
    let positiveNumbers = numbers.filter((number) => {
        number > 0;
    });
    let sum = positiveNumbers.Reduce((total, number) => total + num, 0);
    let average = sum / positiveNumbers.length();
    return average;
}
//The filter needs the return keyword or it needs to be made one inline arrow function, .reduce instead of Reduce, .length does not need parenthesis, and num needs to match the parameter number