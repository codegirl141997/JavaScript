let emp =
{
    name: 'dhanashri',
    age: 28,
    salary: 12.33,
    isActive: true,  

    coding()
    {
        console.log(this.name, this.age, this.salary, this.isActive);

        
    },

    testing()
    {
        console.log(emp.name, emp.age, emp.salary, emp.isActive);
        this.coding();
    },

    printData(x,y)
    {
        return x + y;

    },

    a : function()
    {
        console.log('hello shree');
    },
    //  whenever you create arrow function , we can not use the this keyword inside the arrow function. because arrow function does not have its own this keyword. it will take the this keyword from the parent scope.
    reading: () =>
    {
        console.log(emp.name, emp.age, );
    }

}

console.log(emp.name, emp.age, emp.salary, emp.isActive);
emp.coding();
emp.testing();
let r1 = emp.printData(10, 20);
console.log(r1);
emp.a();
emp.reading();

//POM

let loginpage = 
{
    username: 'naveen',
    password: 'naveen@123', 
    loginBtn: '//input[@id="loginBtn"]',

    doLogin(appUsername, appPassword) 
    {

    },
    forgotPwd()
    {

    },
    getFooters ()
    {

    }
}

// object Destrutcuring :

let user = 
{
    name: 'naveen',
    age: 30,
    salary: 12.33,
    isActive: true,

    address:
    {
        unit:101,
        street: 'main road',
        city: 'pune',
        state: 'maharashtra',
        country: 'india'  ,  

        location:
        {
            lat: 123.33,
            long: 456.33
        }

    }
};

let {name, age, address:{city}} = user;
let {address:{unit},address:{location:{lat, long}}}= user;
console.log(name, age, city);
console.log(unit, lat, long);


