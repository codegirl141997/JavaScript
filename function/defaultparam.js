// default param - with defalut value

function greet (name = 'hello hiwad')
{
 console.log(name);
}

greet(); // hellow hiwad
greet('smita'); // hello smita


function voting (name, age)
{
    console.log(name, age)
}

voting('tom');
voting('peter', 30);

// multiple defualt params:

function createuser(name= 'anonmyous', role = 'viewer')
{
    console.log(name, role)
}

createuser();
createuser('naveen', 'admin');
/*
function add(a, b =10)
{
    return a+b;
}

let t1 = add(5);
console.log(t1)

let t2 =add(5,undefined); // undefined also taken default 
console.log(t2);

let t3 = add (5,null); // 5 only why  null will be trigger defalut value 
console.log(t3);
*/


function add(a, b =10)
{
    console.log(b);
    return a+b;
}

let t1 = add(5);
console.log(t1)

let t2 =add(5,undefined); // undefined also taken default 
console.log(t2);

let t3 = add (5,null); // 5 only why  null will be trigger defalut value 
console.log(t3);
