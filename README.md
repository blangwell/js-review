# JavaScript Review
This is my review of JavaScript with a dash of HTML and CSS.


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