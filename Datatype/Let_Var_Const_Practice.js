//Re-declaration : Re-declaration means declaring the same variable again using the same variable name

//var

var x = 10;
var x =20;
console.log(x); // output: whatever last update va;ue assigned it will update it 


// let

let y =10;
let y =20;
console.lof(y) // output : Identifier 'y' has already been declared

// const 

const a = 10;
const a =20;
console.log(a); // output : Identifier 'a' has already been declared


// what is function : A function is a block of code designed to perform a specific task. It runs only when it is called (invoked).
/*
syntax
function functionalName()
{
    // code to excute
}
*/

// example

function greet()
{
    console.log("hey dhanashri how are you");

}

greet(); // output /hey dhanashri how are you


function scopeTest() {

    if (true) {

        var varVariable = "I am var";
        let letVariable = "I am let";
        const constVariable = "I am const";

        console.log("Inside Block:");
        console.log(varVariable);
        console.log(letVariable);
        console.log(constVariable);
    }

    console.log("Outside Block:");
    console.log(varVariable);

     console.log(letVariable); //letVariable and constVariable are destroyed because they are block scoped
    console.log(constVariable); 
}

scopeTest();


// let: block scope
function rest()
{
    if (true) 
    {
        let b=40; // b is decalred here
        console.log(b);

    }
    console.log(b);
}
rest(); // calling the function  // output : ReferenceError: b is not defined


var a = 10; //global variable
function test() {
console.log(a);//undefined
var a = 20; //declared here
console.log(a);//20
if (true) {
var a = 30;
console.log(a);//30
}
console.log(a);//30
}
test();
console.log(a);//10


