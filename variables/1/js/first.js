/*
   name exrcice: Calculate and print the average of three grades.
   description: Ask the user to enter three grades, calculate the 
   average, and print the result with two decimal places.
   author: Laura Vanessa Perez Perdomo 
   date: March 15th, 2025
*/

let gradeOne;
let gradeTwo;
let gradeThree;
let addition;
let avarage;

gradeOne = parseFloat(prompt("enter the grade one"));
gradeTwo = parseFloat(prompt("enter the grade two"));
gradeThree = parseFloat(prompt("enter the grade three"));
console.log("grade one:" + gradeOne);
console.log("grade two:" + gradeTwo);
console.log("grade three:" + gradeThree);

addition = gradeOne + gradeTwo + gradeThree;

avarage = addition / 3;
console.log("avarage grades is:" + avarage);


