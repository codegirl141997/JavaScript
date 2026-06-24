//++ and --

// Incremental : increase the value by 1
// decremental : Decrease the value by 1

// Post increment :  increase later 

let a =1;
let b = a++;

console.log(a); //2
console.log(b); //1  first you assign the value to the b then increase by 1 


let x = -99;
let y= x++; //--99+1

console.log(x); //-98
console.log(y); //-99


let num =10;
console.log(num++); //  it print immediate valu e10

console.log(num); // what is current value of num

// Preincrement  : first you increase and then assign 

let m = 1; //2
let n =++m; //1

console.log(m); //2
console.log(n);  //2


let u = -1000;
let y =++u;

console.log(u); //-1000+1 =-999
console.log(y); //-999

// post (later ) decrement 

let w =2;
let r = w--;
console.log(w); //1
console.log(r); //2

//4. pre decrement :

let x =2;
let y= --x;
console.log(x); //1
console.log(y); //1


let pop =10;
console.log(++pop); //11
console.log(pop); //11


let rest = -9;
console.log(--rest); //-9-1=-10
console.log(rest); //-10