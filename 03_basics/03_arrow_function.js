const user = {
    username : "vikir",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username} , WELCOME TO WEBSITE`);
        console.log(this);
                
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "vikir"
//     console.log(this.username);
//     // 'this'only work under object if we use it under function it will not work. 
// }
// chai()


// const chai = function() {
//     let username = "vikir"
//     console.log(this.username);
// }



const chai = () => {
    let username = "vikir"
    console.log(this);  // we can also use 'this' under arrow function.
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1+num2
// }    // expliccit return

// [in arrow function if we use {} then have t write return keyword but if we omitted {} or use () thhen no need to write 'return']

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)
// implicit retrun

const addTwo = (num1, num2) => ({username: "hitesh"}) // for object we need to wrap it under parenthesis.


console.log(addTwo(3, 4))

const myArray = [2, 5, 7, 8]

// myArray.forEach() // not neesesary to understand now we will read about it later. 