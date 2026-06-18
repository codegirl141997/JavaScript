
// dat types: Type data 
//1. Primitive data type: Memory is fixed - Pre defined data type
// number
// String
//boolean: true/ false
// BigInt
// undefined
//null


// 2. Non Primitive Data type: memory is not fixed (dynamic)
//Array
//objects
//functions
//map/list/set

//3 identifiers : var, let , const

//1. number: 

var  x = 10;
console.log(x);
console.log(typeof x);


var y = -110;
console.log(y)
console.log(typeof y)


let z = 12.22;
console.log(z);
console.log(typeof z);


// 2. String: either you wrote single coat or double coat both considered as "String"

// ""and ""

// size: each char take 2 bytes

let name = 'Naveeen';
console.log(name);
console.log(typeof name);

let msg =  ' welcome to team';
console.log(msg);
console.log(typeof msg);

let m1 ='$'
console.log(m1);
console.log(typeof m1);

let m2 = '564646';
console.log(m2);
console.log(typeof m2);

let test = " learning the javascript";
console.log(test);
console.log(typeof test);

let p;
console.log(p);
console(typeof p );

//3 . boolean: true/false

let  flag = true;
console.log(flag);
console.log(typeof flag);


//Hoisting: Hoisting means your accesing the variable before decleartion 

console.log(m); // error Cannot access 'm' before initialization
let m =10;

console.log(m); // its giving undefined 
var  m =10;

console.log(m); //Cannot access 'm' before initialization
const m =10; /test