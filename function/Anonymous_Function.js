// Anonymous Function: Anonymous function = a function that does not have a name
// we need to give expression to the function and then we can call it using the variable name.
// Expression name = Test 
let test = function ()
{
    console.log('hello');
}

test();


let add  = function (a, b)
{
    return a + b;
};


let r1 = add(10, 20); // Calling the function with the value/ argument 10 and 20
console.log(r1); // Output: 30



let LaunchBrowser=  function (browserName)
{
    switch(browserName.trim().toLowerCase())
    {
        case 'chrome':
            console.log('launching chrome browser');
            break;

        case 'edge':
            console.log('launching edge browser');
            break;
        
        case 'firefox':
            console.log('launching firefox browser');
            break;
        default:
            console.log('please pass the correct browser name');    
            break;
}
}

LaunchBrowser('chrome'); // Calling the function with the value/ argument 'chrome'  
LaunchBrowser('edge'); // Calling the function with the value/ argument 'edge'

// advacnce version of anonymous function: Arrow function: Arrow function is a shorter syntax for writing function expressions. It is also known as "fat arrow" function because of the "=>" syntax used to define it.