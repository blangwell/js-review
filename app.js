// DATA TYPES
let name = 'Barent'; // string
let age = 30; // number
let isCool = true; // boolean 
const friends = ['Stephen', 'Brian', 'Kimber', 'Waffles']; // array

const tesla = {
    industry: 'Electric Cars',
    ceo: 'Elon Musk',
    yearFounded: 2003,
    foundingMembers: ['Elon Musk', 'JB Straubel', 'Martin Eberard'],
    stockTicker: 'TSLA',
    vehicles: {
        vehicleOne: 'Model S',
        vehicleTwo: 'Model X',
        vehicleThree: 'Model 3'
    },
    // function within an object!
    print: function() {
        // this refers to the tesla object
        console.log(this.ceo); 
    }
};

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
        console.log(this.favoriteGames.favoriteOne);
    }   

};

console.log(games.favoriteGames);




console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(tesla);

// this adds key value pair to tesla object
tesla.stockPrice = '1777'; 


// use dot notation to access object values
console.log(tesla.vehicles.vehicleThree);
// use bracket notation
console.log(tesla['vehicles']['vehicleThree']);

games.printFavoriteGame();


function printFriends(array) {
    array.forEach(friend => {
        console.log(friend);
    })

    // logic can also be written this way =>
    // array.forEach(function(friend) {
    //     console.log(friend)
    // })
};


// FUNCTION TYPES
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


// DOM 
// select an element
const container = document.querySelector('.container');

// create an element
const headerTwo = document.createElement('h2');
headerTwo.textContent = 'My First JS Review'; 

// append child element to .container
container.appendChild(headerTwo);

// add a class to headerTwo
headerTwo.classList.add('subtitle', 'header-two');
// or 
// headerTwo.setAttribute('class', 'header-two');
headerTwo.classList.remove('header-two');



// EVENT LISTENERS
// change text content of element when clicked
headerTwo.addEventListener('click', function() {
    headerTwo.textContent = 'Barent';
});

// make another element
const headerThree = document.createElement('h2');
headerThree.textContent = 'Friends';

container.appendChild(headerThree);
console.log(headerThree);


const list = document.createElement('ul');


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



// PROBLEM SOLVING

// what do i start with?
// what do i hope to end up with? 

// identify the problem
// understand what the problem is asking
// must have the diagnosis before you work on a cure
// break the problem down into smaller, more manageable problems

// - [ ] Do I understand what the prompt is asking?
// - [ ] Am I able to break the problem down?
// - [ ] What is my strategy for solving the problem?
// - [ ] Do I understand what my code is doing?
// - [ ] Am I able to foresee any edge cases?
// - [ ] Am I able to track the order of the code that is being executed?
// - [ ] Am I able to track the values of the variables?
// - [ ] Am I able to walk through my code line by line with an example?
// - [ ] Do I have a working solution?


// fizzBuzz
// Write a function that does the following:
    // takes in an array
    // check each number in the array
    // if the number is divisible by 5 and 3 === FizzBuzz
    // if the number is divisible by 3 === Fizz
    // if the number is divisible by 5 === Buzz

// For example: 
// [3, 5, 15, 20, 9, 7]
// ['Fizz', 'Buzz', 'FizzBuzz', 'Buzz', 'Fizz', 7]

// breakdown
// set up empty array
// make a function that takes an array
// iterate through array
// check remainder of each element
// push the result of each elem inside the result array
// return result array

function fizzBuzz(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let num = array[i]; // intermediate variable
        console.log(num); 
        
        if (num % 3 === 0 && num % 5 === 0) {
            result.push('FizzBuzz');
        } else if (num % 3 === 0) {
            result.push('Fizz');
        } else if (num % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(num);
        }
    }

    return result;
};

const numbers = [3, 5, 15, 20, 9, 7]
console.log(fizzBuzz(numbers));

