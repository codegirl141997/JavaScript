let n1= 10;
let n2 ="10";

console.log(n1==n2); // False

/*
console.log(n1 == n2); // true
//  JavaScript converts "10" (string) to 10 (number), then compares
*/
let a =10;
let b="20";
console.log(a==b); // True
console.log(a===b); // False

//== (loose equality operator) : Compares values only, convert type if needed 
//=== (Strict equality operator) : Compares values and type, no type conversion

console.log(true == 1); // true, because true is converted to 1 before comparison
console.log(false == 0); // true, because false is converted to 0 before comparison
console.log("" == 0); // true, because "" is converted to 0 before comparison
CONSOLE.log(null == undefined); // true, because null and undefined are considered equal in loose equality



console.log(true === 1); // false (boolean is not number)
console.log(false === 0); // false (boolean is not number)
console.log("" === 0); // false (string is not number)
console.log([] === 0); // false (object is not number) 


// Special Case: null vs undefined
console.log(null == undefined);

console.log(null == undefined); // true
// Special rule: JS treats them as loosely equal to each other

console.log(null === undefined); // false
// Different types, so strict equality says no

console.log(typeof(null)); // "object" <-- this is a known quirk in JavaScript. "Object" is the type of null, even though null is not an object
console.log(typeof(undefined)); // "undefined"

if (null == undefined) {
    console.log(" Hi click on the button");
}
else
{
    console.log("close browser");
}


// Side by Side comparison of == and ===
console.log(10 == "10"); // true, because "10" is converted to 10 before comparison
console.log(10 === "10"); // false, because they are different types (number vs string)

console.log(true == 1); // true, because true is converted to 1 before comparison
console.log(true === 1); // false, because they are different types (boolean vs number)     

console.log(false== 0); // true, because false is converted to 0 before comparison
console.log(false === 0); // false, because they are different types (boolean vs number)    


console.log("" == 0); // true, because "" is converted to 0 before comparison
console.log("" === 0); // false, because they are different types (string vs number)

