// /*
// Exercise 2: isAdult()

// Write a function named isAdult. It should take an age (number) 
// and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

// Example: isAdult(21) should return 'Adult'.

// Complete the exercise in the space below:
// */


function isAdult(age){
     if (age >= 18){
         return("Adult")
     } else {         
         return("Minor")
     }
 }

 console.log('Exercise 2 Result:', isAdult(23))





// /*
// Exercise 3: isCharAVowel()

// Write a function named isCharAVowel that takes a single character as 
// an argument. It should return true if the character is a vowel and 
// false otherwise. For the purposes of this exercise, the character 
// y should not be considered a vowel.

// Example: isCharAVowel('a') should return true.

// Complete the exercise in the space below:
// */

function isCharAVowel(letter){
    if (letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() ===  'o' || letter.toLowerCase() === 'u') {
         return(`${letter} is a vowel.`)
     } else {
        return(`${letter} is not a vowel.`)
     }
 }

 console.log('Exercise 3 Result:', isCharAVowel("O"));




/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain) {
    return name + "@" + domain;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "gmail.com"));






/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/


function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`;
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));






/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}


console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));



/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(billAmount, tipPercentage) {
    return (billAmount * tipPercentage) / 100;
}

console.log('Exercise 7 Result:', calculateTip(50, 20));




/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(temp, scale) {
    if (scale === 'C') {
        return (temp * 9 / 5) + 32; // Celsius to Fahrenheit
    } else if (scale === 'F') {
        return (temp - 32) * 5 / 9; // Fahrenheit to Celsius
    } else {
        return "Invalid scale. Use 'C' or 'F'.";
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));







/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operation";
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

