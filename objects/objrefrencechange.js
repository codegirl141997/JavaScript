let u1 =
{
 name: 'Radha',
 age:15,
 city:'blr',
 zip: 1212,
};

let u2=
{name: 'shiv',
 age:25,
 city:'mum',
 zip: 1812,

};

let u3 =
{name: 'kem',
 age:32,
 city:'pun',
 zip: 1212,
};

console.log(u1);
console.log(u2);
console.log(u3);

console.log('-------------------')
u1=u2 //u2 values givrm to thr u1 u1 break your existing condiiton your new position is u2 // we have to latest situation 

console.log(u1);
console.log(u2);
console.log(u3);

console.log('-----------')
u2= u3; //u2 will point to the u3 u3 values given to u2

console.log(u1);
console.log(u2);
console.log(u3);

console.log('==============================')
u3=u1
console.log(u1);
console.log(u2);
console.log(u3);


console.log('==============================')


let p1= 
{
    name: 'dhan',
    age:20,
    city:'kore',


};

let p2=
{
    name:' shri',
    age:21,
    city:'mum',
}

p1=p2
console.log(p1);
console.log(p2);

console.log("--------------------------------");

let n1= {};
console.log(n1); // blank getting emety object

p1=n1
console.log(p1);


// Common cases:
// 1. Reference = null
// 2. Reference is reassigned
// 3. All references to an object disappear
// 4. Function finishes and its local object is not referenced elsewhere

let user = {
    name: 'Dhanashri'
};

user = null;

/*user ─────→ { name: 'Dhanashri' }

After:

user ─────→ null

{ name: 'Dhanashri' }  ← unreachable

Case 2: Reference is reassigned
let user = {
    name: 'Dhanashri'
};

user = {
    name: 'Amey'
};

Initially:

user ─────→ Object 1
            Dhanashri

After reassignment:

user ─────→ Object 2
            Amey

Object 1 → unreachable

✅ Object 1 becomes eligible for GC.

Case 3: Two references, then both disappear
let user1 = {
    name: 'Dhanashri'
};

let user2 = user1;

user1 = null;
user2 = null;

Initially:

user1 ──┐
        ↓
      Object
        ↑
user2 ──┘

After:

user1 → null
user2 → null

Object ← no reference

✅ Object becomes eligible for GC.

Important: Setting only user1 = null would NOT make it eligible because user2 still references it.

Case 4: Object inside a function
function test() {
    let user = {
        name: 'Dhanashri'
    };
}

test();

During the function:

user ─────→ Object

After the function finishes, if nothing outside the function has a reference to that object:

Object ← unreachable

*/