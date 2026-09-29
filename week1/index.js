//exersize 1:
console.log('this is my first program!')
console.log('Welcome John your month salary is 500000')

//example 1:
const num1= 5;
const num2 = 3;
//add two numbers
const sum = num1 + num2
//display the sum
console.log('The sum of '+num1+' and '+num2+' is: '+sum);

//example 2:
const promt = require('prompt-sync')();
console.log('starting')
const name = prompt('Enter your name: ');
console.log('Hello, ${name}');

const number = parseInt(prompt('Enter a number: '));

if (number > 0) {
    console.log("The number is positive");
}
else if (number == 0) {
    console.log("The number is zero");
}
else {
    console.log("The number is negative"); 
}