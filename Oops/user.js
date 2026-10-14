class user
{
    // no need  to create the global variables... 

    constructor (name,age, Salary, Isactive)
    {
        // this.global= local

        this.name = name;
        this.age = age;
        this.Salary = Salary;
        this.Isactive = Isactive;
    }
}

let u1= new user ('TOM',20,12.33,true);
console.log(u1.name, u1.age, u1.Salary)


class person
{
    // default constrcutor 
   constructor ()
   {
    console.log('default const ----')
   }

}

let p1 = new person();
console.log(p1);

