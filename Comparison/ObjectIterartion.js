let user = {
    name :'tom',
    age : 20,
    saalry: 12.33,
    isActive : true
}

console.log(user['name']);

for (let e in user)
{
    console.log(user[e]);
}


console.log('-------');
console.log(Object.keys(user).length);
console.log(Object.values(user));
console.log(Object.entries(user));