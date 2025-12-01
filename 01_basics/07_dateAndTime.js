// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23, 5, 3) // in js month start with 0
// console.log(myCreatedDate.toString());

// let myCreatedDate1 = new Date("2023-01-14")
let myCreatedDate1 = new Date("01-14-2023")
// console.log(myCreatedDate1.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // turn milisecond in second

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDate());

// `${newDate.getDay() and the time is}`

console.log(newDate.toLocaleString('default', { 
    weekday: "long",
    timeZone : 'Asia/Kolkata'
}));








