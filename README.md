# JavaScript Review
This is my review of JavaScript. 

## Examples of Data Types
```javascript
let name = 'Barent'; // string
let age = 30; // number
let isCool = true; // boolean 
const friends = ['Stephen', 'Brian', 'Kimber', 'Waffles']; // array

const games = {
    console: 'PS4',
    ps4Pro: false,
    yearPurchased: 2019,
    firstGames: ['Doom 2016', 'Metal Gear Solid V', 'Tekken 6'],
    timeToPlay: false,
    favoriteGames: {
        favoriteOne: 'Death Stranding',
        favoriteTwo: 'Far Cry 5',
        favoriteThree: 'Sekiro, Shadows Die Twice',
        favoriteFour: 'Katamari Forever'
    },
    printFavoriteGame: function() {
        console.log(this.favoriteOne);
    }

};
```

## Examples of Functions
```javascript

// standard function
function addNumbers(num1, num2) {
    return num1 + num2;
};

// function expression
const multiplyNumbers = function(num1, num2) {
    return num1 * num2;
};


// arrow function 
const subtractNumbers = (num1, num2) => {
    return num1 - num2;
};
```

## DOM Manipulation 
```javascript
// DOM 
// select an element
const container = document.querySelector('.container');

// create an element and set its text content
const headerTwo = document.createElement('h2');
headerTwo.textContent = 'My First JS Review'; 

// append child element to .container
container.appendChild(headerTwo);

// add a class to headerTwo
headerTwo.classList.add('subtitle', 'header-two');
// or 
headerTwo.setAttribute('class', 'header-two');

// remove a class
headerTwo.classList.remove('header-two');
```

## More DOM Manipulation
Iterate through array, create new element, add text to that element, append item to list, listen for a click to append list to document.
```javascript
// iterate through my friends array
for (let i = 0; i < friends.length; i++) {
    // reference each friend
    let eachFriend = friends[i];
    console.log(eachFriend);

    // create a li (list item)
    const listItem = document.createElement('li');
    
    listItem.textContent = eachFriend;
    // add textContent to that li
    list.appendChild(listItem);
    
}

// append that to a ul (unordered list)
headerThree.addEventListener('click', function() {
    container.appendChild(list);
});

### isInside
```js
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['taylor', 'rome', 'adam'], 'rome'); // => true
// isInside(['pete', 'adam', 'taylor'], 'fred'); // => false
```

### isInside
```js
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
isInside(['taylor', 'rome', 'adam'], 'rome'); // => true
isInside(['pete', 'adam', 'taylor'], 'fred'); // => false
```
### reverseStr
```js
// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
reverseStr('bootcamp'); //=> 'pmactoob'
reverseStr('General Assembly'); //=> 'ylbmessA lareneG'
```
### luckySevens
```js
// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
luckySevens(25); // => [ 7, 14, 21 ]
luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]
```
### copyMachine
```js
// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]
```
### everyOtherWord
```js
// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]
```
### wordYeller
```js
// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// let sent = "Stop it now! Please, wont you stop?";
// let yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// let words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true
```
### arraySubstring
```js
// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
// arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]
```
#### evenCaps
```js
// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//
// Examples:
//
// evenCaps("Tom got a small piece of pie")
// => "ToM GoT A SmAlL PiEcE Of pIe"
// evenCaps("the book is in front of the table")
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"
```