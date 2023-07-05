//MISSING/INCORRECT SYNTAX EXERCISES
//EASY - Only one thing is incorrect or missing
//1.
greet(name) {
    return "Hello " + name;
}

//2.
function sum(a, b) {
    a + b;
}

//3.
function square {
    return n * n;
}

//MEDIUM - 2 things incorrect or missing
//1. 
function reverseString[str] {
    let reversed = str.split('').reverse().join('');
    reversed;
}

//2.
factorial(n) {
    if (n = 0 || n === 1) return 1;
    return n * factorial(n - 1);
} 

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