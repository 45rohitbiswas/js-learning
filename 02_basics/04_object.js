// const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vikir",
            lastname: "baskerville"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id  : 1,
        email : "v@gmail.com",
    },
    {
        id  : 1,
        email : "v@gmail.com",
    },
    {
        id  : 1,
        email : "v@gmail.com",
    }
]

// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // output datatype in array
// console.log(Object.values(tinderUser)); 
// console.log(Object.entries(tinderUser)); // first element in sub-array is target and second element of sub-array is value

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // if the property isavailable or not


const course = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor: "vikir"
}

// course.courseInstructor
const {courseInstructor: instructor} = course // curly braces deua thakle bughte hobe object destructuring kora hochhe.
// console.log(courseInstructor);
console.log(instructor);

// +++++++++++++++++++ API intro++++++++++++++++++++++++

// {
//     "name" : "vikir",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},  // JSON : javascript object notation.
    {},
    {}
]









