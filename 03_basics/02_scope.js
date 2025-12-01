// var c = 300 // outside of if everything is known as global scope. 
// value of global scope is available under vlog scope but viice-versa is not true.
let a = 300
if(true) { // under if what we write is known as vlog scope
    let a = 10 
    const b = 20
    // var c = 30 // EVEN IF WE DONOT WRITE VAR then also we will get 30
    console.log("INNER: ", a);
    
}

// scope has different meaning in diifferent language
// wwithin website console scope is different than the scope used in node.js

console.log(a);
// console.log(b);
// console.lṆog(c);

// ++++++++++++ NESTED SCOPE +++++++++++++++++++++++++

function one() {
    const username = "vikir"

    function two() {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website); 

    // here one is global scope of two. we can extract value from global scope but global scope can't extract value from one.

    two()   
}
one()

if(true) {
    const username = "vikir"
    if(username === "vikir"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++ INTERESTING ++++++++++++++++



console.log(addone(5))
function addone(num) {
    return num+1
}
// in case of function we can get value beefore declaration





const addTwo = function(num) {
    return num+2
}
console.log(addTwo(5))
// in constant we can get value after declaration we can't get value before declaration.