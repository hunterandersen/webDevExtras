function add(a, b){
    return a + b;
}

//This function takes in a string and outputs a new version of the string
//where all letters have been made lower case except for one.
function randomUpperCase(word){
    let randNumber = Math.floor(Math.random() * word.length);
    let lowerCaseWord = word.toLowerCase();
    const leftSide = lowerCaseWord.slice(0, randNumber);
    const rightSide = lowerCaseWord.slice(randNumber + 1);
    const upperLetter = lowerCaseWord[randNumber].toUpperCase();
    return leftSide + upperLetter + rightSide;
}
console.log(randomUpperCase("testing"));

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

console.log(findMax([3, 4, 2, 4, 6, 3, 4, 0, 5]));