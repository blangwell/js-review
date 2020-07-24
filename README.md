# JavaScript Review
This is my review of JavaScript with a dash of HTML and CSS.

[Data Types](##examples-of-data-types)\
[Functions](##examples-of-functions)\
[For Loops](##for-loops)\
[DOM part 1](##dom-manipulation)\
[DOM part 2](##more-dom-manipulation)\
[HTML](##html)\
[CSS](##css)\
[Problem Solving Checklist](##problem-solving-checklist)

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
### Function Use Cases

```js
const arrayInside = [1, 4, 7, 9]

// conditional logic within a function
function isInside(array, element) { 
    if (array.indexOf(element) !== -1) {
        return true;
    } else {
        return false;
}
};
console.log(isInside(arrayInside, 4));
```

## For Loops
```js
// decrementing for loop
function reverseString(string) {
    let text = '';

    // decrementing for loops mostly use elem.length - 1
    for (var i = string.length - 1; i >= 0; i--) { 
        text += string[i];
    } // decrementing for loop
    return text.toLowerCase();
};

console.log(reverseString('any string youd like'));
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
```
## Classes
### \_\_proto\_\_
```__proto__``` signals one object inheriting from another object.
```js
const game = {
    title: 'Death Stranding',
    releaseYear: 2019,
    rating: 'M'
};

const gameTwo = {
    title: 'Far Cry 5',
    releaseYear: 2018
};

gameTwo.__proto__ = game; // this means that gameTwo will have a rating: 'M'
```
### constructor functions
Here we are defining class attributes by way of a constructor function. Note the use of ```.this``` in the variable declaration and in the ```intro()``` function.
```js
class GithubProfile {
    constructor(username, name, url) { // constructor function
        this.username = username;
        this.name = name;
        this.url = url;
    }
    intro() {
        console.log(`My name is ${this.name} and my username is @${this.username}`) // backtick wrapped string to include javscript
    }
}
```

## Fetch()
```fetch()``` is a global method used to 'fetch' resources from a server asynchronously (a little bit like the requests module in Python!) Asynchronous operations means your code can keep running while waiting on a response from a server. 
```js
// this fetches data objects from my github
fetch('https://api.github.com/users/blangwell')
``` 
## Promises
```.then()``` is a method used to return a ```Promise```. By using ```fetch()``` followed by ```.then()``` we are essentially saying, "fetch me this data, _then_ when you get it, do _this_.
#### fetch() and .then()
```js
fetch('https://api.github.com/users/blangwell') //pass in url as a string
.then(response => {
    return response.json();
})
.then(data => {
    let githubUrl = data.url; 
    let githubUserName = data.login;
    let githubName = data.name;

    // create an instance of the GithubProfile class
    const barent = new GithubProfile(githubUserName, githubName, githubUrl);

})
```


## HTML
To generate HTML boilerplate code in VSCode, use the command `! tab`.  \
The CSS should be linked in the document's head like so:
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>JS Review</title>
</head>
```

The JavaScript src file should be linked at the bottom of the body like so:
```html
<body>
    <h1>JS Review</h1>
    <div class="container">

    </div>
    <script src="./problems.js"></script>
</body>
```

## CSS
Remember that the C in CSS stands for _Cascading_. The more specific selector wins out:
```css
body {
    background-color: black;
    font-family: Helvetica, sans-serif;
    color: white;

}

/* .big words is more specific than body, therefor the font color will be green*/
.big-words {
    color: green;
}
```

Multiple selectors can be used on the same style:
```css
/* the following style will effect h1, h3, and p elements*/
h1, h3, p {
    color: blue;
}
```

## Problem Solving Checklist
Remember that almost any problem can be broken down into smaller parts!

- [ ] Do I understand what the prompt is asking?
- [ ] Am I able to break the problem down?
- [ ] What is my strategy for solving the problem?
- [ ] Do I understand what my code is doing?
- [ ] Am I able to foresee any edge cases?
- [ ] Am I able to track the order of the code that is being executed?
- [ ] Am I able to track the values of the variables?
- [ ] Am I able to walk through my code line by line with an example?
- [ ] Do I have a working solution?