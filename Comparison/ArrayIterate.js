let products = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//range 0-4:length 5

console.log(products);

//1. index based loop:
for (let i = 0; i <= products.length - 1; i++) {
    console.log(products[i]);
    if (products[i] === 'iphone 17') {
        console.log('found the product');
        break;
    }
}

console.log('-----------');

//2. for .. of loop:
for (let e of products) {
    console.log(e);
    if (e === 'iphone 17') {
        console.log('found the product');
        break;
    }
}

console.log('-----------');

//Reverse order:
for (let i = products.length - 1; i >= 0; i--) {
    console.log(products[i]);
}

//using for ... of loop:



//
let num = [1, 2, 3, 4, 5]; //5; 0-4

for (let e of num) {
    console.log(e);
}

//for ... of
let empData = ['Tom', 34.44, true, 101, 'Pune'];
console.log(empData);

for (let e of empData) {
    console.log(e);
}

console.log(empData);

//for ... in
let prods = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5

for (let e in prods) {
    console.log(prods[e]);
}

// Jagged Array: Because every row has a different length, it is called a jagged array.

/*
Row 0 → 1  2  3  4  5       → 5 values
Row 1 → 10 20 30             → 3 values
Row 2 → 100 200              → 2 values
Row 3 → 1000                 → 1 value

*/

let data = [
    [1, 2, 3, 4, 5], // 5 elements
    [10, 20, 30],   // 3 elements
    [100, 200],     //2 elements
    [1000]          //1 elements
];

console.log(data);

for (let u of data) {
    for (let v of u) {
        process.stdout.write(v + ' ');
    }
    console.log();
}
console.log('---------------');
for (let i = 0; i <= data.length - 1; i++) {
    for (let j = 0; j <= data[i].length - 1; j++) {
        process.stdout.write(data[i][j] + ' ');//1
    }
    console.log();//new line
}


let prods = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5

//reverse order: using for .. of loop:

let count = prods.length - 1;//4
for (let e of prods) {
    e = count;
    console.log(prods[e]);//macbook air
    count--;
}

//for .. in loop:

//1d: 1 for loop
//2d: 2 for loops
//3d: 3 for loops
//nd: n for loops


console.log(typeof prods);




let numarray = [4, 6, 7, 8];
numarray[-1] = 100;
numarray[-100] = 200;

console.log(numarray);

console.log(Object.getOwnPropertyNames(numarray));

console.log(numarray.length);
