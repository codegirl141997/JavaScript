// Redecleartion :
var a = 10;
console.log(a)
var a = 20;
console.log(a)



let a = 10; // yntaxError: Identifier 'a' has already been declared
console.log(a)
let a = 20;
console.log(a)

const a = 10; // yntaxError: Identifier 'a' has already been declared
console.log(a)
const a = 20;
console.log(a)



function scopeTest() {
    if (true) {
        var varVariable = "I am var";
        let letVariable = "I am let";
        const constVariable = "I am const";
        console.log("Inside if block:");
        console.log(varVariable); //  Accessible
        console.log(letVariable); //  Accessible
        console.log(constVariable); //  Accessible
    }
    console.log("Outside if block:");
    console.log(varVariable); //  Accessible — 
    function scoped
// console.log(letVariable); //  ReferenceError: 
letVariable is not defined
// console.log(constVariable); //  ReferenceError: 
constVariable is not defined
}
scopeTest(); /