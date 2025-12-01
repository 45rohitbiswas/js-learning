// singleton 
// Object.create 

// object literals

const mySym = Symbol("key1")

const JsUser = {      // key value pair
    name: "vikir",
    "full name" : "Vikir Van Baskerville",
    [mySym] : "mykey1",
    age : 18,
    location: "kolkata",
    email : "vikirvanbaskerville@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // making symbol in objects

// JsUser.email = "Vikir@email.com"
// Object.freeze(JsUser)
// JsUser.email = "vikir@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello js user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name} `);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


