// what is the maximum size 

console.log(Number.MAX_SAFE_INTEGER); // maxmium range: 9007199254740991

console.log(9007199254740991+124567);

//2^53-1 then we use MAX_SAFE_INTEGER

let num = 100n; //  suffix which is end with n then it will called it as "BigInt"
console.log(typeof num);

let num1 = 100;
console.log(num1)

//Rules Bigint when applying 

let n1 = BigInt(2000);
console.log(n1);
console.log(typeof n1);

let num1 = 1000n;
console.log(num1 + 10n);



