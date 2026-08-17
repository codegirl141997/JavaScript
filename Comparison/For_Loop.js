for  (let a=1;a<=10;a++)
{
console.log(a);
}

// for (;;) means an infinite for loop. 🔄
//for (start; condition; update) 
// for (   ;   ;   ) here is no condiiton loop will be run infinetly 
    // code}

for (;;)
{
    console.log('Hotel Taj');
}

/*
while vs for loop
while use cases :when number of iterations not allowed 
wait for the element on the page
wait for the page loading 
webtables pagenations : back 1,2,3,4,5,6,7,8,9,next
infinite scrolling
*/

for loop use cases : when number of iterartions are fixed 
// month dropdown jan to dec :1 to 12 months
// footer links 
// array :


for  (let n=1; n<=100; n++)
{
    console.log(n)
    if (n%5==0)
        console.log('hi');
}

let bill =50;
let flag = bill>=50? true : false;
console.log(flag); // Output : True

let bill =40;
let flag = bill>=50? true : false;
console.log(flag); // Output: False

console.log('hello');
process.stdout.write('hello');