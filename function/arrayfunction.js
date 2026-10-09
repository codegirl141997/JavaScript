// Mutotaor Operators:
//1. push : Add the elemnet end of the array (what value added isnot displaying but length of the array is displaying)
//2. pop: Remove the last elemnet from the array (what value removed is displaying but length of the array isnot displaying)
//3. unshift : Add the elemnet start of the array (what value added isnot displaying but length of the array is displaying)
//4. shift : Remove the first elemnet from the array (what value removed is displaying but length of the array isnot displaying)
//5. splice : Add, remove, replace anywhere in the array (what value added or removed is displaying but length of the array isnot displaying)
//6. Slice : Copy the array (what value copied is displaying but length of the array isnot displaying)

let num = [1, 2, 3, 4, 5];
console.log(num.length);

//push method will add the element at the end of the array but it will return the new length of the array
let e1= num.push(100);
console.log(num);
console.log(e1);

//pop method will remove the last element from the array
let num2 = [1, 2, 3, 4, 5];
let e2 = num2.pop();
console.log(num2);
console.log(e2);

//unshift method will add the element at the start of the array but it will return the new length of the array
let num3 = [1, 2, 3, 4, 5];
console.log(num3);
console.log(num3.length);
let e3 = num3.unshift(100);
console.log(e3);

//shift method will remove the first element from the array

let num4 = [1,2,3,4,5];
console.log(num4);
console.log(num4.length);
let e4 = num4.shift();
console.log(num4);
console.log(e4);

// Splice Method: The splice method : Add, remove, replace anywhere
// splice(startIndex, deleteCount, item1, item2, itemN)
let cart = ['iphone', 'samsung', 'oneplus', 'nokia', 'realme'];

//cart.splice(0,0,'redmi','samsunxyz'); //add redmi at index 0
//console.log(cart);

//cart.splice(0,1,'google'); //remove iphone from index 0 and add google
//console.log(cart);

//cart.splice(0,0,);
//console.log(cart);

//console.log("before change: " + cart);
//cart.splice(2,1,'google'); //remove oneplus from index 2 and add google
//console.log(cart);

//cart.splice(0,cart.length,'canon');
//console.log(cart);

//cart.splice(cart.length,1,'canon');
//console.log(cart);

//cart.splice(cart.length-1,1,'canonxyz');
//console.log(cart); 


cart.splice(2,0,'mouse',); //add mouse and keyboard at index 2
console.log(cart);



// 6. Slice Method: The slice method : Copy the array

let cart2 = ['iphone', 'samsung', 'oneplus', 'nokia', 'realme'];
//let newCart = cart2.slice(0,3);
//console.log(newCart);

//let newCart2 = cart2.slice(-1);
//console.log(newCart2);

//let newcart3 = cart2.slice(-2,-5);
//console.log(newcart3);

let newcart4 = cart2.slice(-2);
console.log(newcart4);

// reverse method: The reverse method : Reverse the array

let a = [1, 2, 3, 4, 5];
let reva = a.reverse();
console.log(reva);


// indexOf method: The indexOf method : Find the index of the element in the array

let que = [ 'abc', 'xyz', 'pqr', 'lmn', 'abc', 'xyz', 'pqr', 'lmn', 'abc', 'xyz', 'pqr', 'lmn', 'abc', 'xyz', 'pqr', 'lmn' ];
let index = que.indexOf('lmn');
//console.log(index); // Sometimes it will return -1 if the element is not found in the array

let index2 = que.indexOf('abc');
console.log(index2); // Sometimes it will return -1 if the element is not found in the array

let k = que.indexOf('abc'); 
console.log(k); // find the index of 'abc' starting from index 2

//2nd occurrence of 'abc' in the array
let index3 = que.indexOf('abc', k+1); // start counting position from 1
console.log(index3); // Sometimes it will return -1 if the element is not found in the array

// 3rd occurrence of 'abc' in the array
let index4 = que.indexOf('abc', index3+3); // start counting position from 1
console.log(index4); // Sometimes it will return -1 if the element is not found in the array














