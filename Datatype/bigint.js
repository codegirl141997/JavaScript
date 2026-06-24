// what is the maximum size 

console.log(Number.MAX_SAFE_INTEGER); // maxmium range: 9007199254740991

console.log(9007199254740991+124567);

//2^53-1 then we use MAX_SAFE_INTEGER

let num = 100n; //  suffix which is end with n then it will called it as "BigInt"
console.log(typeof num); //  bigint

let num1 = 100;
console.log(num1)

//Rules Bigint when applying  - Bigint with normal we can perom any mathamatical operation

let n1 = BigInt(2000);
console.log(n1);
console.log(typeof n1);

let a = 100n;
console.log(a+100); //Cannot mix BigInt and other types, use explicit conversions

let num1 = 1000n;
console.log(num1 + 10n);  // Any multiple operation we can perform with bigint 



console.log(+"100n"+10n);

let phone = "9764346346";
console.log(phone.length);

//SSN , Aahar card, CC, DEbit,FAX

let ssn = "6464646464646";
let cc = " 123 1212 3434 5454 ";

let cc = "+101 (2342-2323-12)";
console.log(cc.length);

// All billing amount or slaalry it should be number becsue we ll perform mathamatical operation 

