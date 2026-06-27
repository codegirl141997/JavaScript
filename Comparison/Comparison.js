// == VS ===
// == Loose Equality > it will check only the value 
// === Strict Equality : It will check the value + datatype


console.log(a==10);
console.log(10=="10"); //10==10: True

console.log("10"===10); String === number ==> False  // 99% we ll go the strict equality 

true =1
false =0

console.log(true==1); //1==1
console.log(true===1); //boolean 

// The == operator performs type coercion, which means JavaScript tries to convert the operands to the same type before comparing them.

let n1 =10;
let n2 ="10";
console.log(typeof n1);
console.log(typeof n2);

console.log(n1==n2);

// Loose Equality (==) the forgiving one ==
//Whenn you use ==, javascript performs something called type Coercion. It looks  

console.log(true==1); //true (true becomes 1)
console.log(false==0); //true (false becomes 0)
console.log(""==0); // true (empty String becomes 0)
console.log([]==0); //  true (empety array becomes 0)

console.log(true===1); //false (boolean is not number)
console.log(false===0); //false (boolean is not number)
console.log(""===0); // false (String is not number)
console.log([]===0); // false (object is not number)


// === : if the types dont match , the answer always false. 