// Start --> Statement --> Condition Checking <--True --> Flase End


do{let p =1;
    console.log(p);
}
while(p<=10);

// putput p is not defined because p is defined inside the do block and it is not accessible outside the block.

let p =1;
do{
    console.log(p);
    p++;
}
while(p<=10);

let p =1;
do{
    console.log(p);
    p++;
}
while(p>=10); // output is 1 because do while loop will execute the code block once before checking the condition.


let p =1;
do{ p++;
    console.log(p);
   
}
while(p<=10); // output  2,3........11


// Use Cases : Do while : Iterartions are not fixed 
// wating for the element : is already on the page  