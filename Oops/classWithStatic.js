// Static in class
export class employee { 


    static CompName = "Google";
constructor (name,age, salary, isActive)
{
    this.name = name;
    this.age = age;
    this.salary= salary;
    this.isActive = isActive;

    
}
 //actions: Methods

    coding()
    {
        console.log(this.name, 'is coding');

    }

    reading()
    {
        console.log(this.name, 'is reading');
        return 100;
    };

    static billing()
    {
        console.log('billing method');
    }
}

let emp = new employee ('tom',10,54546,true);
console.log(emp.name, emp.age, emp.salary,emp.isActive);
console.log(employee.CompName);
employee.CompName ="IBM";
console.log(employee.CompName);
employee.billing();

// static variable we can not acces through the object we can acces through classname
