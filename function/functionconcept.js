// function: a piece of code which is doing something/ logic ... reuesable 

// function method
// function without class / function
// function within class: method


//1. simple function:
//zero input param, no return (void) 

// function is non primitive 
// awalys stored in the heap memory 
// here we not passed any parameter 
function test()
{
    console.log('hello test');
}

console.log(typeof test); // function 

// This docurmetation of the function with the help of that we ll understand what ll be return type 
/**
 * This function add two varibales.
 * @param {number}x
 * @param{number}y
 * @return it returns addition of two numbers 
 */

function addition (x,y)
{
    return x+y;
}

let m1= addition(10,30);
console.log(m1);

let m2 = addition('hello',10)
console.log(m2);

let m3= addition( 'hello', 'radha')
console.log(m3);


let t1 = addition (10,20);
console.log(t1);

let t2 = addition('hello', 'tom');
console.log(t2);

// when i call the function we need memory -- call stack memory when calling the function it will use stack 
// at the time calling function it will use memeory once callling function done it will be 0 allocation of memory and delocation of memory 

//Function call → Call Stack → Memory allocated → Function executes → Function finishes → Removed from Stack → Memory can be released

//The function's execution context is removed from the Call Stack, and memory that is no longer reachable can be reclaimed.

// gc is only for the heap memory 

//LIFO = Last In, First Out

/*
LIFO = Last In, First Out

Entered:    A → B → C
Removed:    C → B → A
JavaScript's Call Stack follows the LIFO principle. When functions call other functions, the latest function is pushed onto the stack. When it completes, it is popped first.

*/
// function calling circular way 
// Function A

/*
function A() {
    console.log("A started");

    // A calls B
    B();

    console.log("A finished");
}

// Function B
function B() {
    console.log("B started");

    // B calls C
    C();

    console.log("B finished");
}

// Function C
function C() {
    console.log("C started");
}

// Calling A
A();

// queue: Queue = FIFO = First In, First Out

// a function is calling itself: recursive function: recursion function
function login()
{
    console.log('login to app');
    login ();
}

login ();

*/

// function with parameter 
// functioname: CalculateBilling
// parameters:2: amount, tax

function testing (amount, tax)
{
let totalamt = amount+ tax
};

testing(100+200); //calling functions by passing values/ arguments 

// call by value