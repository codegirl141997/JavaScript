//== vs ===

// == loose equality
// === strict equality 


console.log(10 == 10); // true
console.log(10 == "10"); // true
console.log('10' == 10); // true

console.log(10 === 10)
console.log(10 === 11)


console.log(true == 1); // true (true becomes 1)
console.log(false == 0); // true (false becomes 0)
console.log("" == 0); // true (empty string becomes 0)
console.log([] == 0); // true (empty array becomes 0)


console.log(true === 1); // false (boolean is not number)
console.log(false === 0); // false (boolean is not number)
console.log("" === 0); // false (string is not number)
console.log([] === 0); // false (object is not number)


console.log(null == undefined); // true
// Special rule: JS treats them as loosely equal to each other
console.log(null === undefined); // false
// Different types, so strict equality says no
console.log(typeof (null)); // "object" <-- a famous JS bug!
console.log(typeof (undefined)); //