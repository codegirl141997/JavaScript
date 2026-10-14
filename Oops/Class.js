// Class: Category, template, - Not physical entity
// Objects: a phsyical entit - variavles, methods 

class Employee
{
    name;
    Age;
    Salary;
    Isactive;


    // Constucter : It will be help use to create the object and help us initalize the global variables
    // One constructer allowed 

    constructor (name,age, Salary, Isactive)
    {
        // this.global= local

        this.name = name;
        this.age = age;
        this.Salary = Salary;
        this.Isactive = Isactive;
    }

// Actions : Methods

 test()
 {
    console.log(this.name, 'Radha');
    
 }

 reading()
 {
    console.log(this.name, 'is reading');
    return 100;
 }

 running = function ()
 {
    console.log(this.name, )
 }

 printing =() =>
 {
    console.log(this.name, ' is printing')
 }

 calc = (a,b) =>
 {
    return a+b;

 }


};


// Create the object of the calss uisng new kkeyword(Oustsid ethe calss)
// Create the object ---> Imedtaitly object will call 
// Objevt varibale will be store in the stack memory
let emp =new Employee('Radha', 25,1,true);
console.log(emp.name, emp.age,emp.Salary,emp.Isactive)
emp.printing();
let a= emp.reading();
console.log(a);
let t2= emp.calc(100,200)
console.log(t2);
emp.test();

let emp1 = new Employee();
console.log(emp1.name, emp1.age,emp1.Salary,emp1.Isactive)
console.log('------------------------------------')


// this keyword represnet current class of the object 

//
let emp2 = new Employee ('tom',30);
console.log(emp2.name, emp2.age, emp2.Salary, emp2.Isactive);
console.log('------------------------------------')


/* let emp3 = new Employee ('peter', 31, 78464, true)
emp3= null; 
console.log(emp3.name) */