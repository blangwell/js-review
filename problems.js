
// isInside
const arrayInside = [1, 4, 7, 9]

function isInside(array, element) { 
    if (array.indexOf(element) !== -1) {
        return true;
    } else {
        return false;
}
};
console.log(isInside(arrayInside, 4));

//loop through every item in array
//check if every elelment plugged in is in array
// const arrayInside = [1, 4, 7, 9]
// console.log(isInside(arrayInside, 4));
// //loop through every item in array
// //check if every element plugged in is in array

// write function called reverseString(string) 
// return string with chars reversed
// iterate through each character of the string


// reverseString

function reverseString(string) {
    let text = '';
    for (var i = string.length - 1; i >= 0; i--) {
        text += string[i];
    } // decrementing for loop
    return text.toLowerCase();
};

console.log(reverseString('any string youd like'));


// luckySevens

//takes a parameter called max
//return an array of all numbers up to and including max divisible (%) by 7
function luckySevens(max) {
    let result = [];
        for(let i = 1; i <= max; i++){
            if(i % 7 === 0){
                result.push(i);
            }
} return result;
};
console.log(luckySevens(50));



// copyMachine

// write a function copyMachine(element, num) 
// return an array that is the length of num filled with element
// repeat element number of times  indicated by num
// append those elems to an array
// copyMachine(candy, 2)

function copyMachine (element, num) {
    let eArray = [];
    for (let i = 1; i <= num; i++) {
        eArray.push(element);
    }
    return eArray;
};

console.log(copyMachine('wild', 12));

// everyOtherWord
//everyOtherWord takes a param called sentence
//take in a sentence and return an array with every OTHER word in the sentence

//turn string into an array
// loop through resulting array
// take every other word and push to result array
// return result array

function everyOtherWord(sentence) {
    // let sentenceArray = [];
    let result= [];

    let splitSentence = sentence.split(' ');
    console.log(splitSentence);

    
    for (let i = 0; i < splitSentence.length; i++) {
        console.log(splitSentence[i]);
        
        // push 0 index and even indexes to result
        if (i % 2 === 0){
            result.push(splitSentence[i]);
        }
        
    }
    return result;
};

console.log(everyOtherWord('hello how are you today sir?'));


// wordYeller

// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"

// make wordYeller function with sentence params
function wordYeller(sentence) {
    // create empty string to hold modified sentence
    let yelledSentence = '';
    let wordArray = [];
    // we could create an array out of the sentence to loop through
    // convert string to array called splitString
    let splitString = sentence.split(' ');

    // loop through each word in the array
    for (let i = 0; i < splitString.length; i++) {
        // find the last character of every word
        let lastCharacterOfWord = splitString[i].slice(-1);

        // add conditionals to detect punctuation
        // is there a DRYer way to write this?
        if (lastCharacterOfWord.includes('.') || 
        lastCharacterOfWord.includes(',') ||
        lastCharacterOfWord.includes('!') ||
        lastCharacterOfWord.includes('?') || 
        lastCharacterOfWord.includes(';') ||
        lastCharacterOfWord.includes(':')) { // use slice to see last index of word in array
            // console.log(splitString[i]);
            wordArray.push(splitString[i]);
        } else {
            // append ! to end of the word
            // add yelled word to wordArray
            let addYelling = splitString[i] += '!'; 
            wordArray.push(addYelling);
        }
    
    }

    // remove commas with .join(' ')
    // convert array back to string
    yelledSentence = wordArray.join(' ').toString();

    return yelledSentence;
};

console.log(wordYeller('the quick brown fox'));


// arraySubstring

// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.

// create an array of strings
let stringArray = ['hello', 'hi', 'howdy', 'hey'];

//create function
function arraySubstring(words, str) {
    //indexOf if false returns -1
    // so we can say if (stringArray.indexOf(str) === -1)
    // then returns false
    // else return true
    // must check each word in words, so we use a loop
    for (let i = 0; i < words.length; i++) {   
        if (words.indexOf(str) === -1) {
            return false;
        
        } else {
            return true;
        }
    }
};

console.log(arraySubstring(stringArray, 'pants'));


// evenCaps

// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.

// sentence[i].toUppercase()

// create function
// create empty result string of data to return
// loop through each character in string
// if string index % 2 === 0 run toUppercase on index
// append character to result string

// side note, this will be a great piece of logic to use
// when someone on the internet says something stupid

function evenCaps(sentence) {
    let capsString = '';
    for (let i = 0; i < sentence.length; i++) {
        if (i % 2 === 0) {
            // convert string toUpperCase
            // append capitalized character to capsString
            capsString += sentence[i].toUpperCase(); 
        
        } else {
            capsString += sentence[i];
        }

    }
    return capsString;
};

console.log(evenCaps('the quick brown fox jumps'));