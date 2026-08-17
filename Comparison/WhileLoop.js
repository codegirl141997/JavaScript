// print 1 to 10 using for loop
/*

whenver wroks is repetative then we use loop 
console.log(1);
console.log(2);
console.log(3); 
*/

// while , for, do-while

let i =1;
while(i <= 10) {
    console.log(i);
    i++;
}


let i =1;
while(i <= 100000) {
    console.log(i);
    ++i;
}


while (true) {
    console.log("Learn and earn");
    break; // brek statement we can use in loop swich case, if else, for loop, while loop, do while loop  break can not use if else loop 
}

// Dead Code : code which is not reachable, code which is not executed, code which is not used in the program.

while (false) {
    console.log("Learn and earn");
    break; }

   
// 10 to 1
    let j=10
    while(j>=-10) {
        console.log(j);
        j--;
    }

    let l =1
    while (l<=10) {
        console.log(l);
        if (l===5) {    
            console.log("break the loop");
            break; // break the loop when l is 5
    l++;
}

    }

    //Questions

    // print 1 to 10 using while loop

    let a =1
    while(a<=10)
    {
        console.log(a);
        a++;
    }

    // print 10 to 1 using while loop 

    let a=10
    while(a>=1)
    {
        console.log(a);
        a--;
    }

    // Print even numbers 

    let a =1;
    while (a<=20){

    
    {if(a%2)
        console.log(a)
    }
    a++;
}


    let a =1;
    while (a<=20){

    
    {if(a%2==0)
        console.log(a)
    }
    a++;
}
//Print 1 2 3 4 5 and then stop at 5 using break

let a=1
while (a<=10) {
    console.log(a);
    if(a==5)
    {
        console.log("a equals to 5");
        break;
    }
    a++;


}

//Print 1 to 10 and skip 5.
let a=1
while (a<=10) {
    if(a==5)    {
        a++;
        continue;
    }
    console.log(a);
    a++;    
}
