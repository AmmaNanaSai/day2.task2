// //  1task


// 1. Create three variables

var studentName = "Raghu";
let studentAge = 22;
const collegeName = "ABC College";

// Print all three values

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("College Name:", collegeName);


// 2. Change the var value

studentName = "Rahul";

console.log("Changed Student Name:", studentName);


// 3. Change the let value

studentAge = 23;

console.log("Changed Student Age:", studentAge);


// 4. Try changing the const value

try {
    collegeName = "XYZ College";
} catch (error) {
    console.log("Const Error:", error.message);
}


// 5. Try redeclaring the var variable

var studentName = "Arun";

console.log("Redeclared var:", studentName);


// 6. Try redeclaring the let variable

try {
    eval("let studentAge = 24; let studentAge = 25;");
} catch (error) {
    console.log("Let Error:", error.message);
}



// // task2

// // Get information from the user

// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// let city = prompt("Enter your city:");

// // Print the result in the console

// console.log("Name:", name);
// console.log("Age:", age);
// console.log("City:", city);


// // task3


// let name = prompt("Enter your name");

// alert("Welcome " + name + "!");



// task4


// let birthYear = prompt("Enter your birth year");

// let currentYear = new Date().getFullYear();

// let age = currentYear - birthYear;

// console.log("Birth Year:", birthYear);
// console.log("Age:", age);



// task5


// let text = "Hello";
// let number = 100;
// let decimal = 25.5;
// let isStudent = true;
// let isPassed = false;
// let notDefined = undefined;
// let emptyValue = null;

// console.log("Hello:", typeof text);
// console.log("100:", typeof number);
// console.log("25.5:", typeof decimal);
// console.log("true:", typeof isStudent);
// console.log("false:", typeof isPassed);
// console.log("undefined:", typeof notDefined);
// console.log("null:", typeof emptyValue);



// task6

// let student = {
//     name: "Naveen",
//     age: 22,
//     city: "Trichy",
//     qualification: "B.Tech",
//     isStudent: true
// };

// // 1. Complete object
// console.log("Complete Object:", student);

// // 2. Name
// console.log("Name:", student.name);

// // 3. Age
// console.log("Age:", student.age);

// // 4. Qualification
// console.log("Qualification:", student.qualification);

// // 5. isStudent
// console.log("isStudent:", student.isStudent);/


// task7


// let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"];

// // First fruit
// console.log("First fruit:", fruits[0]);

// // Second fruit
// console.log("Second fruit:", fruits[1]);

// // Last fruit
// console.log("Last fruit:", fruits[fruits.length - 1]);

// // Total number of fruits
// console.log("Total number of fruits:", fruits.length);


// task8

// let a = 20;
// let b = 5;

// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);
// console.log("Exponentiation:", a ** b);


// task9

// let shirt = 999;
// let pant = 1499;
// let shoes = 1999;

// let total = shirt + pant + shoes;

// console.log("Shirt:", shirt);
// console.log("Pant:", pant);
// console.log("Shoes:", shoes);
// console.log("Total:", total);


// task10


// let tamil = 80;
// let english = 75;
// let maths = 90;

// let total = tamil + english + maths;
// let average = total / 3;

// console.log("Tamil:", tamil);
// console.log("English:", english);
// console.log("Maths:", maths);
// console.log("Total Marks:", total);
// console.log("Average Marks:", average);


// task11

// let a = 10;

// let b = a++;

// console.log(a);
// console.log(b);



// task12


// let a = 10;

// let b = ++a;

// console.log(a);
// console.log(b);



// task13


// let a = 20;

// let b = a--;

// console.log(a);
// console.log(b);



// task14


// let a = 20;

// let b = --a;

// console.log(a);
// console.log(b);



// task15

let a = 5;

let b = a++;

let c = ++a;

let d = b--;

console.log(a);
console.log(b);
console.log(c);
console.log(d);


task16


let num = 10;

// +=
num += 5;
console.log("After += 5:", num);

// Reset
num = 10;

// -=
num -= 5;
console.log("After -= 5:", num);

// Reset
num = 10;

// *=
num *= 5;
console.log("After *= 5:", num);

// Reset
num = 10;

// /=
num /= 5;
console.log("After /= 5:", num);

// Reset
num = 10;

// %=
num %= 5;
console.log("After %= 5:", num);

// Reset
num = 10;

// **=
num **= 5;
console.log("After **= 5:", num);



// task17

let name = "Naveen";
let age = 22;
let city = "Trichy";
let college = "ABC College";

// Array - 5 favorite subjects
let subjects = ["Tamil", "English", "Maths", "Science", "Computer"];

// Student Object
let student = {
    name: name,
    age: age,
    city: city,
    subjects: subjects,
    isStudent: true
};

// Print details
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("City:", student.city);
console.log("First Subject:", student.subjects[0]);
console.log("Last Subject:", student.subjects[student.subjects.length - 1]);
console.log("Total Subjects:", student.subjects.length);
console.log("Complete Object:", student);


// final task

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

// Convert prompt values from string to number
num1 = Number(num1);
num2 = Number(num2);

// Calculations
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;
let power = num1 ** num2;

// Display results
console.log("First Number:", num1);
console.log("Second Number:", num2);
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Power:", power);