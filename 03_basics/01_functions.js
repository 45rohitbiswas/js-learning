

function sayMyName() {
    console.log("v");
    console.log("i");
    console.log("k");
    console.log("i");
    console.log("r");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2); 
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result 
    // console.log("vikir"); // after return statement code will not execute.

    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username) { // in case user forget to give username, we can give a default value by typinf (username = "vikir")
    if(username === undefined) { // we can also use !username instead of username === undefined
        console.log("please enter a username") // in js "" and indefined is predetermined as false value we will learn about it later.
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("vikir"))
// console.log(loginUserMessage()) // if no value is passed then it will suggest undefined



function calculateCartPrice(val1, val2, ...num1) { // ... is a rest operator is will give output as array
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 60000));

const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject) {
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);  // if we use user.username, user.price in case of anyobject.username it gives same result then why are not we using it?
}
// handleObject(user)
handleObject({
    username: "vikir",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSeconfValue(getArray) {
    return getArray[1]
}
// console.log(returnSeconfValue(myNewArray));
// console.log(returnSeconfValue([200, 300 ,600, 1000]));















