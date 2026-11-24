

for (let i = 0; i <= 5; i++) {
    console.log(i)
}


for (let x = 2; x <= 20; x += 2) {
    console.log(x)
}

for (x = 20; x >= 2; x -= 2) {
    console.log(x)
}


// for loop with array

let fruits = ['apple', 'banana', 'papaya', 'orange']

for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i])
}


let students = ["ram", "radha", "jay", "shiv", "siya"]

for (i = 0; i <= students.length; i++) {
    console.log("studnets name", students[i])
}


// Verify multiple page titles

const pagetitle = ['homepage', 'loginpage', 'setting', 'logout']

for (i = 0; i <= pagetitle.length; i++) {
    console.log(pagetitle[i])
}


// Example 7: Click multiple buttons
// Suppose your webpage has multiple buttons with the same locator.

const buttons = page.getByRole('button', {
    name: 'Add to Cart'
});

const count = await buttons.count();

for (let i = 0; i < count; i++) {
    await buttons.nth(i).click();
}

//Example 9: Check all checkboxes

const checkboxes = page.locator('input[type="checkbox"]');

const count1 = await checkboxes.count();

for (let i = 0; i < count1; i++) {
    await checkboxes.nth(i).check();
}


//Print array elements in reverse order.

num = [10, 20, 30, 40, 50]
