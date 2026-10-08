//Call the function test and give it the value 'naveen'.

function test(value) 
{
    console.log(value);
}

test('naveen'); // Calling the function with the value/ argument 'naveen'




test('dhanashri');

//simple function
function test(name) {
    console.log(name);
}

let getdata= function gettingUserDetailsFromDashboardPage(name) {
    console.log('hello user details', name);
}

getdata('naveen'); // Calling the function with the value/ argument 'naveen'

console.log(typeof getdata); // Calling the function with the value/ argument 'naveen'  // function

console.log(typeof gettingUserDetailsFromDashboardPage); // Calling the function with the value/ argument 'naveen'  // undefined

let userdata = function gettingUserDetailsFromDashboardPage(name, age) 
{
    console.log('hello user details', name, age);
};

userdata('niya', 30); // Calling the function with the value/ argument 'naveen' and 30
console.log(userdata.name); // Calling the function with the value/ argument 'naveen'  // function