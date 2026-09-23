let user = 
{
    name: 'dhanashri',
    age:29,
    salary:12000000,
    isActive: true
};

    console.log(user)

    //object iteration: for... in loop:

    for (let e in user )
    {
        console.log(user[e]);
    } // in iteration we dont use dot notation we use square brcaket e is a variable containing the key.


    console.log('......................................')
    console.log(Object.keys(user));
    console.log(Object.values(user));
    console.log(Object.entries(user));
    console.log(Object.entries(user));
    console.log(Object.length);
console.log('--------------------------------------------------------')
   let userjson = JSON.stringify(user,null,10);
   console.log(userjson);