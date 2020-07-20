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

    array.forEach(function(friend) {
        console.log(friend)
    })
};

friends.forEach(function(friend) {
    printFriends(friend);
});

printFriends(games.firstGames);



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
}