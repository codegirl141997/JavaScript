// map: transform every element in an array and return a new array
// returns a new array with the transformed elements


let num = [1, 2, 3, 4, 5];
let newnum = num.map((e) => e*2);
console.log(newnum);

let sqrt = num.map(e=> e*e);
console.log(sqrt);

let Multi_by_5 =num.map(e=> e*5);
console.log(Multi_by_5);


let empnames = ['radha', 'shiva', 'jay', 'dhanashri', 'naveen'];
let newUppercase= empnames.map(e=> e.toUpperCase());
console.log(newUppercase);

//2. filter: remove from existing array based on condition and return a new array   
// returns a new array with the filtered elements

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Lessthan_5= numbers.filter(e => e < 5);
console.log(Lessthan_5);


let evenNumbers =numbers.filter(e=> e%2==0);
console.log(evenNumbers);

let oddNumbers = numbers.filter(e=> e%2!=0);
console.log(oddNumbers);

let cust_Names = ['Jay', 'shiv', 'Jiza', 'Di']
let Morethan_2 = cust_Names.filter(e=>e.length>3);
console.log(Morethan_2);

let Prod_Data = [' Apple macbook', 'apple iph', 'samsung galaxy', 'canon']
Prod_Data
let final_Prod= Prod_Data
.filter(e=>e.startsWith('apple'))
.filter(e=>e.includes('iph'))
.map(e=> e.replace('iph', 'iphone'));
console.log(final_Prod);

// reduuce: combine eveything into one Value 
// it will return a single value 

let numData = [10,20,30,40,50];
let totalnum = numData.reduce((sum, n) => sum = sum+n,0);
console.log(totalnum);


let productData = ['apple Macbook' ,'apple iph', 'Samsung galaxy', 'Canon'];
let finalVal = productData.reduce((result,e) => result+e);
console.log(finalVal);






