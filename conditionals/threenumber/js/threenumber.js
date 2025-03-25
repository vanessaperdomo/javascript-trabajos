/*
	Name exercise: Three numbers
	Description: Perform the previous exercise with 3 numbers.
        Print if the 3 numbers are equal, and if they are not equal, 
        print the larger number.
	Author: Laura Vanessa Perez Perdomo
	Date: march 15th 2025
*/


let numberOne;
let numberTwo;
let numberThree;

numberOne = parseFloat(prompt("enter the number one:"));
numberTwo = parseFloat(prompt("enter the number two:"));
numberThree = parseFloat(prompt("enter the number three:"));

console.log("number one:", numberOne);
console.log("number two:", numberTwo);
console.log("number three:", numberThree);

if (numberOne == numberTwo && numberOne == numberThree) {
  console.log("are aqual.");
} else {
  if (numberOne > numberTwo && numberOne > numberThree) {
    console.log("the number one is greater .");
  } else if (numberTwo > numberOne && numberTwo > numberThree) {
    console.log("the number two is greater.");
  } else {
    console.log("the number three is greater.");
  }
}


