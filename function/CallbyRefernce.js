function test(value)
{
 console.log(value);
}

test('tom'); // Calling the function with the value/ argument 'tom'
test('jerry');
test(10);

console.log(test); // Calling the function with the value/ argument 10  

//Key concept for you: value is a parameter, while "Tom", 100, and true are arguments passed to the function.

// call by reference: Object refrence 
let user = {
 name: 'John',
 age: 30,
 salary: 50000,
 isAdmin: true
};  

function getuserDeatils(userobj)
{
    console.log(userobj.name,userobj.age,);
    console.log(userobj);
    userobj.name = 'Dhanashri';
}
 console.log(user.name); // John
getuserDeatils(user); // John 30
console.log(user.name); // Dhanashri


// destructuring concept:

let p1 =
{
    name: 'John',
    age: 30,
    salary: 50000,
    isAdmin: true
}

function getp1Details({name, age, salary, isAdmin})
{
    console.log(name, age, salary, isAdmin);
}

// calling the function with the object p1
getp1Details(p1); // John 30 50000 true 


// Destructuring is about choosing the data you need from an object.





