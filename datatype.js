


// number 

let x = 42
console.log(x, typeof x);

let y = 3.14
console.log(y, typeof y)

let z = NaN
console.log('z', typeof z)

let a = Infinity;
console.log(a);
console.log(typeof a);

// String

let b = "dbvjdbv"
console.log(b, typeof b)

let c = `template`
console.log(c)

let d = true
console.log(d, typeof d)

let e = undefined
console.log(e, typeof undefined)

let g = null;
console.log(g, typeof g)

let h = Symbol("id")
console.log(h, typeof h)

let i = BigInt(1234567890123)
console.log(i, typeof i)

// Non primitive data type

//1. An object is a collection of properties stored in key-value pairs.

let name = {
    name: "Radha",
    age: 15,
    isActive: true
}

console.log(name, typeof name)

// how to access 
// There are two ways.

// 1. Dot notation
console.log(employee.name);

// 2. Bracket notation
console.log(employee["salary"]);

// Array = collection of the multiple values

let Array = [1, 5, "dgaba", 1.5, true]
console.log(Array, typeof Array)

// Function – Reusable Block of Code
//A function is a reusable block of code designed to perform a specific task.

function fun() {
    console.log("Username"),
        console.log("password")
}

fun();

// Date: 1. Date Object
// What is Date?
// The Date object is used to work with dates and times in JavaScript.

var today = new Date();
console.log(today, typeof today);

var today = new Date();

console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());


// What is Map?
// A Map is used to store data in key-value pairs.
// You might think: We already have objects. Why do we need Map?
// The main difference is that Map allows keys of any data type, whereas ordinary objects primarily use strings and symbols as property keys.


let emp = new Map();

emp.set("username", 'Dhanashri');
emp.set("Password", 'dhanu');
emp.set("age", 10)
console.log(emp);

console.log(emp.get("username"));

// 3. Set Object
// What is Set?
// A Set is a collection of unique values.
// That means it does not allow duplicate values.
// Think about a shopping application.

let Prd = [
    'apple',
    'xeor',
    'redmi'
]
console.log(Prd)

// What is RegExp?
// RegExp stands for Regular Expression.
// It is used to search, match and validate patterns in strings.
// For example:
// - Email validation
// - Mobile number validation
// - Password validation
// - Searching text
// - Checking whether a string contains a particular word

let pattern = /hello/;

console.log(pattern.test("hello world"));
console.log(pattern.test("good morning"));

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailPattern.test("test@gmail.com"));
console.log(emailPattern.test("testgmail.com"));

// null : no values
let obj = null
console.log(obj);
console.log(typeof null);

// This is a famous JavaScript historical bug.
// In the early implementation of JavaScript, values were represented using tagged types. The representation of null was mistakenly identified in a way that made typeof null return "object".