let products = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5

console.log(products);

//1. index based loop:
for (let i = 0; i <= products.length - 1; i++) {
    console.log(products[i]);
    if (products[i] === 'iphone 17') {
        console.log('found the product');
        break;
    }
}
/*
i = 0 → products[0] → macbook pro
i = 1 → products[1] → imac
i = 2 → products[2] → iphone 17
i = 3 → products[3] → canon
i = 4 → products[4] → macbook air

*/
console.log('-----------');

//2. for .. of loop:
for (let e of products) {
    console.log(e);
    if (e === 'iphone 17') {
        console.log('found the product');
        break;
    }
}

console.log('-----------');

//Reverse order:
for (let i = products.length - 1; i >= 0; i--) {
    console.log(products[i]);
}

//using for ... of loop:



//
let num = [1, 2, 3, 4, 5]; //5; 0-4

for (let e of num) {
    console.log(e);
}

//for ... of
let empData = ['Tom', 34.44, true, 101, 'Pune'];
console.log(empData);

for (let e of empData) {
    console.log(e);
}

console.log(empData);

//for ... in
let prods = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5

for (let e in prods) {
    console.log(prods[e]);
}


let expectedProducts = [
    'MacBook',
    'iMac',
    'iPhone',
    'Canon'
];

for (let product of expectedProducts) {
    console.log(product);
}

// Search for a particular product

let abcproducts = ['MacBook', 'iMac', 'iPhone', 'Canon'];


for (let product of products) {

    if (product === 'iPhone') {
        console.log('Product found');
        break;
    }
}

// Use case 3: Playwright — verify multiple UI elements
let expectedMenus = [
    'Home',
    'Products',
    'Cart',
    'Contact'
];

for (let menu of expectedMenus) {
    await expect(page.getByText(menu)).toBeVisible();
}

//Use case 4: Multiple test URLs
let urls = [
    'https://example.com',
    'https://example.com/products',
    'https://example.com/contact'
];

for (let url of urls) {
    await page.goto(url);
    console.log(await page.title());
}


// 2D Array — Rows + Columns

let loginData = [
    ['admin', 'admin123'],
    ['user1', 'user123'],
    ['testuser', 'test123']
];


// use case 1:

let LoginData = [
    ['admin', 'admin123'],
    ['user1', 'user123'],
    ['testuser', 'test123']
];

for (let user of LoginData) {

    let username = user[0];
    let password = user[1];

    console.log(username);
    console.log(password);
}

//Use case 2: Multiple products + prices

let prod = [
    ['MacBook', 1000],
    ['iPhone', 800],
    ['Canon', 500]
];

for (let product of products) {

    let name = product[0];
    let price = product[1];

    console.log(name + ' = ' + price);
}

Use case 3: Multiple test cases
let testData = [
    ['validUser', 'valid123', 'Login successful'],
    ['wrongUser', 'valid123', 'Invalid username'],
    ['validUser', 'wrong123', 'Invalid password'],
    ['', '', 'Username required']
];


/*|                | 1D Array                  | 2D Array                |
| -------------- | ------------------------- | ----------------------- |
| Structure      | One list                  | Rows + columns          |
| Example        | `['A','B','C']`           | `[['A','B'],['C','D']]` |
| Best for       | One type/list of data     | Related test data       |
| QA example     | Product names             | Username + password     |
| Playwright use | Verify multiple UI values | Data-driven tests       |
| Access         | `data[0]`                 | `data[0][1]`            |
*/


//1D = Shopping list Apple
Banana
Mango
/*
Username    Password
admin       admin123
user        user123
*/


let LloginData = [
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'user123' },
    { username: 'tester', password: 'test123' }
];



// Login Testing : Instead of writing 3 separate test flows, you have one flow + multiple test data.

let LoginDataa = [
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'user123' },
    { username: 'tester', password: 'test123' }
];

for (let user of LoginDataa) {

    console.log('Username:', user.username);
    console.log('Password:', user.password);

}


let login_Data = [
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'user123' }
];

for (let user of login_Data) {

    await page.getByLabel('Username').fill(user.username);

    await page.getByLabel('Password').fill(user.password);

    await page.getByRole('button', { name: 'Login' }).click();
}