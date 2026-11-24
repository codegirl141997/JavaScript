console.log(10 > 5);
console.log(true === true);


let age = 18;
if (age >= 18) {
    console.log('Voter is eligible')
}

else {
    console.log('Voter is not eligible ')
}

if (true) {
    console.log('hello')
}

else {
    console.log('quit')
}

let iselemenet = false

if (iselemenet) {
    console.log('click on the element')
}
else {
    console.log('element is missing')
}

// cross browser logic:

let browser = 'chrome'

if (browser === 'chrome')
    console.log('launch chrome')

if (browser === 'edge')
    console.log('launch edge')

if (browser === 'safari')
    console.log('launch safari')

else {
    console.log('plz pass  the right browser')
}

//if - else if:

let brw = "chrome";

if (brw = "chrome")
    console.log('chrome launched')

else if (brw = 'xoxo')
    console.log('xoxo launched')
if (brw = "edge")
    console.log('launch edge')
else if (brw = 'not launch chrome')
    console.log('launch edge successfully')