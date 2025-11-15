const accountId = 144553    // constant
let accountEmail = "rohitbiswas030906@gmail.com" // variable most used
var accountPassword = "12345" // variable not popular
accountCity = "Jaipur" // it is also possible but avoid it
let accountState;

// accountId = 2 // not allowed to change the constant

accountEmail = "rb@hc.com"
accountPassword = "21345"
accountCity = "bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in lock scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])