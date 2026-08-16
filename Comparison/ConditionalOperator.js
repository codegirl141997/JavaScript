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

let browser = 'edge';
// Condition 1:
if(browser === 'chrome')
{
    console.log("Launch chrome browser");
}
// Condition 2:
if (browser === 'safari')
{
    console.log("launch safari");
}
// Condition 3:
if (browser === 'edge')
{
    console.log('edge');
}
// Condition 4:
else
    {
console.log('please pass the right browser...');
}



// here it will execute  Condition 3 only

let browser = 'edge';
// Condition 1:
if(browser === 'chrome')
{
    console.log("Launch chrome browser");
}
// Condition 2:
if (browser === 'safari')
{
    console.log("launch safari");
}
// Condition 3:
if (browser === 'edge')
{
    console.log('edge');
}
// Condition 4:
else
    {
console.log('please pass the right browser...');
}

let browser = 'safari';
// Condition 1:
if(browser === 'chrome'){
    console.log("Launch chrome browser");
}
else if (browser === 'safari'){
    console.log("launch safari");
}       
else if (browser === 'firefox'){
    console.log('launch firefox');
}
else if (browser === 'edge'){
    console.log('launchedge');
}

else{
    console.log('please pass the right browser...');
}


// switch case : break 
let browser = 'edge';
switch (browser) { 
    case 'chrome':
        console.log("Launch chrome browser");
        break;
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