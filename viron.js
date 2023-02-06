let fruits = ["aroma", "mango", "chips", "guava", "pear"]
// console.log(fruits[3])
function printFruit(myfruit, index) {
    console.log(`${index}. ${fruits}`)
}

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)

let myWinner = new Map();
myWinner.set(1, "gets it all")
myWinner.set(2, "A good effort")
myWinner.set(3, "Somewhere along the line")
console.log(myWinner)
console.log(myWinner.get(2))
// USE SET TO STORE ARRAY
myClothing = ["wool", "linen", "linen", "cotton", "fiber", "wool"]
let uniqueCloth = new Set(myClothing)
console.log(uniqueCloth)

// SPREAD AND REST
const designer = ["gucci", "londor", "cassivi"]
const fashionDesigner = ["duke", "control", "Femi", "Someet"]
const joinThem = [...designer, ...fashionDesigner]
console.log(joinThem)

let flying = {
    speed: 340,
    degree: "36f"
};
let boat = {
    color: "yellow",
    year: 2012
};

let flyingBoat = {...flying, ...boat};
console.log(flyingBoat)

// SOME ARRAY MANIPULATIONS
const myArray = ["house", "money", "goods"]
myArray.push("check")
console.log(myArray)
console.log(myArray.length)

let ghostAdd = [...myArray, "maths", "operators", "machines"]
console.log(ghostAdd)

let woe = "What you said to me!";
const woeSep = [...woe];
console.log(woeSep)

const car1 = {
    speed: 240,
    color: "green"
};

const car2 = {...car1}
car2.speed = 110;
console.log(car2)

//  fruits.forEach(printFruit);

// const car = ["Honda", "Merc", "Toyota"]
// car.forEach(function mycar(thiscar, index){
//     console.log(`${index}. ${car}`)
// })

// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
// function logDairy() {
//     for (prop of dairy) {
//         console.log(prop)
//     }
// }
// logDairy();

// var clothingItem = {
//     price: 50,
//     color: 'beige',
//     material: 'cotton',
//     season: 'autumn'
// }

// for( key of Object.keys(clothingItem) ) {
//     console.log(key, ":", clothingItem[key])
// }

const animal = {
    canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
    for (prop of Object.keys(bird)) {
        console.log(prop, " : ", bird[prop])
    }
}
// birdCan();

function animalCan() {
    for (clue in bird) {
        console.log(`${clue}: ${bird[clue]}`)
    }
}
// animalCan();

// const car2 = {
//     speed: 200,
//     color: "red"
// }
// console.log(Object.keys(car2));
// let cloth = "wool";
// let dogMeat = 404;
// console.log(`${cloth} ${dogMeat}`)
// console.log(cloth, dogMeat)
// console.log(cloth + " " + dogMeat)
// console.log(`${23 + 30 * 2}`)