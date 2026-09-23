let user =
{
    name: 'dhanashri',
    age:29,
    salary:12000000,
    isActive: true
};

//cloning of the object 
//... spread parameter ==> Disadavantage it will always create shallow copy not deep copy

let myuser= {...user} //this is syntax we used exacty copt the object 

console.log(user);
console.log(myuser);

user.age=50;
console.log(user);
console.log(myuser);

//structureClone(user);

let newUser = structuredClone(user);
console.log(newUser);


console.log('=================================================================================')

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

/*console.log(cust);
console.log("========================")
let newCustomer = {...cust};
console.log(newCustomer);

newCustomer.address.city='satara';
console.log(newCustomer);
console.log('............................');
console.log(cust);*/

//deepcopy

let newCustomer = structuredClone(cust);
console.log(newCustomer);
newCustomer.address.city='xyz';
console.log(newCustomer);
console.log(cust);