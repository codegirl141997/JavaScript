// Encapsulation:

class employee
{
    name;
    age;
    salary;


constructor (name, age, salary)
{
    this. name = name;
    this.age = age;
    this.salary= salary;

}

// public getter and setter method 


setsalary (salary)
{
    this.salary=salary;
}

getsalary (salary)
{
    return this.salary;
}

}

let emp =new employee( 'tom', 14, 45466);
console.log(emp.name, emp.age, emp.salary);


let s1 = emp.getsalary();
console.log(s1);

 emp.setsalary(1500);
 s1= emp.getsalary();

console.log(s1);


// create class login page
/*
class loginpage
{
    #UserName
    #Password

    constructor(UserName, Password)
    {
        this.#UserName = UserName;
        this.#Password =Password;
    }




//getter 

getUserName()
{
    return this.#UserName;
}

getPassword()
{
    return this.#Password;
}

setUserName()
{
    this.#UserName = username;
}

setPassword()
{
    this.#Password = password;
}
}
// Post
let lp = new loginpage('dhanashreee14@gmail.com', 'dhanu@123')
 let un = lp.getUserName();
 console.log(un);
 let Pwd = lp.getPassword();
 console.log(Pwd);

// update
// Get
un = lp.setUserName('Dhanu@14gmail.com');
Pwd = lp.setUserName('dhanu141197');

console.log(un);
console.log(Pwd);


class user
{
    name;
    #age;
    #salary;

    constructor(name, age, salary)
    {
        this.name = name;

        if (age >=18)
        {
          this.#age = age;
        }

        if (salary>=10)
        {
            this.#salary = salary;
        }
    }

    setAge(age)
    {
        if(age>=18)
        {
            this.#age = age
        }
        else
        {
            console.log("age must be gr than or eq to 18");
        }
    }

    getAge()
    {
        return this.#age
    }
}

let obj = new user ('tom',10,5);
let t1 = obj.getAge();
console.log(t1);*/



class Browser
{
    #LaunchBrowser()
    {
        console.log('Launching browser');
    }

    #checkCompitble()
    {
        console.log('CheckCompitable')
    }

    #checkramsize()
    {
        console.log('checkRamsize');
    }
    #checkUpgrade()
    {
        console.log('checkupgrade');
    }
}

// user is trying access to the browser

let obj = new Browser();
obj.LaunchBrowser();
obj.checkCompitble();
obj.checkramsize();
obj.checkUpgrade();