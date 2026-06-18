
// what ismean by concat ?
// Adding two things or  merging two things 

// number + number = Addittion 
//String + Anything + concat

// anything adding with + oprator it will be concation & anything other than plus oprator it will be mathamatical oprator 

let x =100;
let y =200;

let a = "radha";
let b = "shiv";

console.log(x+y); //300
console.log(a+b); //radhashiv

console.log (x+a); //100radha
console.log (y+b); //200shiv

console.log(x+y+a+b); //300radhashiv
console.log("all "+ a+x+y+b);

console.log(a+b+(x+y)); //radhashiv300 

console.log(x+y+a+b+x+y);

console.log (1+ "1");//11
console.log("1"+1); //11
console.log(1+1); //2
console.log("1"+"1"); //11

console.log(1 - "1"); // here becuse of the minus operator string 1 converted into the number 1-1=0
console.log("5"-2); // JS will check the - oprator it will convert minus oprator the to the non-numric to numric 
console.log("5"+2); // concatation becuse of the plus oprator 
console.log("10"-"4"); //
console.log("10"+"4");
console.log("hello"- 2); // NaN not a number 
console.log(10- "radha"); // Nan not a number 

console.log(10/"2"); // 10/2=5  becsue of the neagtive oprator it convert nonnumric to the numric 
console.log(20/ "dha"); // nan

console.log(10*"2"); // 20
console.log(10*"xya"); //NaN

//exponetial **

console.log(2**3); // 8 2*2*2*
console.log("2"**3); //2**3

//Unary Plus (+): converts to a number :

console.log(+"42"+ 5); //String numric number converted into numric number 

let d= "45";
console.log(+d+10);


let totalAmount = "2000";
console.log(+totalAmount+ 1); //2000+200=2200 // 2000+1 =20001

// Unary Negation (-) :
console.log(-"42" + 100);// 42100
console.log("-130"-20); //-130-20=-150

let salary = "30000";
console.log(salary+2000); // convert salary into number 
console.log(+salary+2000);

console.log(100- -"40");//140

console.log(+"hello"+2);




