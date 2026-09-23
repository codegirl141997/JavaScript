// Object is non prmitive data


let user =
{
    name: 'Dhanashri',
    age:29,
    Job: 'Qa'

};





// How to access particular value 

console.log(user.name);
console.log(user.age);
console.log(user.Job); // we can access dot notation 

console.log(user['name']); // we can access object bracket notation // key walaway mention single qoute
console.log(user['age']);
console.log(user['Job']);


console.log(user);
user.Job ='dev'; // updated
console.log('user'); 
user.phone =738793499 // added
console.log(user);

delete user.age; // delete
console.log(user);
/*
user = null;
console.log(user.name); // Cannot read properties of null
*/
//user = undefined
//console.log(user.name); // TypeError: Cannot read properties of undefined (reading 'name')

// Suppose we create a large number of objects in heap memory and their references
// become null or undefined. These objects become unreachable and may occupy memory.
// This can affect application performance. The Garbage Collector (GC) identifies
// unreachable objects and automatically removes them from memory to free up space.
// gc will not destory object which porper refrence

// update the porperty 

let cust = 
{
    name: 'radha',
    age: 25,
    phone: 7387934958,
    salary:12.33,
    isActive :true,

    address:{
        flat:101,
        building: 'new building',
        city:'banglore',
        zip:10101 
    }


};
console.log(cust.name);
console.log(cust.age);
console.log(cust.address.city);
console.log(cust['address'].city);
console.log(cust['address']['zip']);


console.log('--------------------------------')

//js object

let user1 = 
{
    name:'radha',
    age:30,
    city:'pune',
    zip:1213
}

//js objevt to json ===> this concept we ll use in API Automation also (This process also called Serialiazation)
console.log(user1);
let user1Json= JSON.stringify(user1) //JSON is String
console.log(user1Json);
console.log(typeof user1Json);

// JSON String ---> JS Object: De-Serialization 

let userobj = JSON.parse(user1Json)
console.log(userobj);
console.log(typeof userobj);

console.log(user.name === userobj.name);
console.log(user===userobj); // object refrence : different memeroy location

