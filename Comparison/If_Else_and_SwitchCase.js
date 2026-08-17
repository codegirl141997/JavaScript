console.log(10>5)
console.log(true===true);

let age = 10;

if (age >=16)
{
    console.log('you are eligible for voting');

}
else
{
    console.log(`you are  not eligible for voting`);
}

// if (true) <--- execute this block of code {}
// if false  <--- Skip the code inside {}

if (true)
{
    console.log("hello!");
}
else{ // dead code / unreachable code 
    console.log('bye!!');
}




let isElemenetPresent = false;

if(isElemenetPresent)
{
    console.log('click on the element');
}
else
{
    console.log('ele is missing on the ..');

}

// in this case it will excute conditon 1 and 4
// you can write break condition with if else  you can  write break condiiton with switch case only 

let browser1 = 'edge';
// Condition 1:
if(browser1 === 'chrome')
{
    console.log("Launch chrome browser");
}
// Condition 2:
if (browser1 === 'safari')
{
    console.log("launch safari");
}
// Condition 3:
if (browser1 === 'edge')
{
    console.log('edge');
}
// Condition 4:
else
    {
console.log('please pass the right browser...');
}



// here it will execute  Condition 3 only

let browser2 = 'edge';
// Condition 1:
if(browser2 === 'chrome')
{
    console.log("Launch chrome browser");
}
// Condition 2:
if (browser2 === 'safari')
{
    console.log("launch safari");
}
// Condition 3:
if (browser2 === 'edge')
{
    console.log('edge');
}
// Condition 4:
else
    {
console.log('please pass the right browser...');
}

let browser3 = 'safari';
// Condition 1:
if(browser3 === 'chrome'){
    console.log("Launch chrome browser");
}
else if (browser3 === 'safari'){
    console.log("launch safari");
}       
else if (browser3 === 'firefox'){
    console.log('launch firefox');
}
else if (browser3 === 'edge'){
    console.log('launchedge');
}

else{
    console.log('please pass the right browser...');
}


// switch case : break 
let browser = 'edge';

// Switch case say give me the key first and then i will give you the value for that key

// Basic Template of switch case 
// key is the value you want to check
//I found my answer. Stop the switch
switch(key){
   
    case value:
    break;
    default:
        break;
}

// Example of switch case
//  break means "come out of the current switch or loop immediately.
// In a switch, JavaScript doesn't execute every case one by one like an if-else chain.

It first finds the matching case, then starts executing from that point.
/*
day = 2
   ↓
Is day === 2?
   ↓
YES ✅
   ↓
Go inside case 2
*/

let day = 2;

switch(day) 
{
    case 1:
        console.log('monday');
        break;  

    case 2:
        console.log('tuesday');
        break;  

        case 3:
        console.log('wednesday');
        break;

        default:
        console.log('please pass the right day');
        break;
}

// Example of switch case
// Buggy code : If there is no  any break statement, the program will continue to execute the next case statements until it finds a break or reaches the end of the switch statement. This is called "fall-through" behavior.

// Output is : tuesday, wednesday

let browser4 = 'chrome';
switch (browser4) { 
    case 'chrome':
        console.log("Launch chrome browser");
       // break;
    case 'safari':
        console.log("launch safari");
        break;
    case 'firefox':
        console.log('launch firefox');
        break;
    case 'edge':
        console.log('launch edge');
        break;
    default:
        console.log('please pass the right browser...');
        break;
}

// Righ practice : write default case at the end of the switch statement. It will be executed if none of the cases match the value of the expression.

let browser5 = 'ie';
switch (browser5) { 
    case 'chrome':
        console.log("Launch chrome browser");
       // break;
    case 'safari':
        console.log("launch safari"); // Debug point also called breakpoint
        break;
    case 'firefox':
        console.log('launch firefox');
        break;
    case 'edge':
        console.log('launch edge');
        break;
    default:
        console.log('please pass the right browser...');
        break;

        case 'brighton':
        console.log('launch bright on');
        break;
}


// Use Cases : 
// 1. Cross Browser Testing : If you want to test your application on different browsers, you can use switch case to handle different browser scenarios.
// 2. Multi Enviornment: QA, Dev, stage , UAT, Prod : If you want to deploy your application on different environments, you can use switch case to handle different environment scenarios.
//3. Multi user (RBAC) Role-Based Access Control.: If you want to give different access to different users, you can use switch case to handle different user scenarios.
//4.Localization : If you want to support multiple languages in your application, you can use switch case to handle different language scenarios.
//5. Multi Device : If you want to support multiple devices in your application, you can use switch case to handle different device scenarios.
//6.operating system : If you want to support multiple operating systems in your application, you can use switch case to handle different operating system scenarios.
//7.api status code : If you want to handle different API status codes in your application, you can use switch case to handle different API status code scenarios.
// loan type: home loan, personal loan, car loan, education loan, business loan, etc. : If you want to handle different loan types in your application, you can use switch case to handle different loan type scenarios.

// If write both cases 2 chrome  timmes it will execute the first case and then break it will not go to the second case chrome. It will not execute the second case chrome. It will break the switch statement after executing the first case chrome.