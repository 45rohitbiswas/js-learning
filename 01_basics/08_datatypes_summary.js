// primitive (call by value)
// 7 types : string, number, boolean, null, undefined, symbol, BigInt


const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);


const bigNumber = 234546574653453252352n


// reference type (non-primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "hitesh",
    age : 22,
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outSideTemp);
console.log(typeof myFunction);
console.log(typeof id);

// + +++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive) memory

let myYoutube = "vikirvasberksevillius.com"

let anothername = myYoutube
anothername = "chai aur code"

console.log(anothername);
console.log(myYoutube);

let userOne = {
    email: "usergoogle.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "vikir@gmail.com" // we acess a particular value from object in this way

console.log(userOne);
console.log(userTwo);






