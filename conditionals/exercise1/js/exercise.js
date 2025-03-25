/*
  Name exercise: Comparing the Areas of Three Squares.
  Description: calculates the area of ​​three squares given their sides and then: 
  - Determine if all the areas are equal. - Identify which area is greater if 
  they are different. Formula: Area = side square.
  Author: Laura Vanessa Perez Perdomo.
  Date: march 20th 2025
*/


let areaOne, areaTwo, areaThree;
let sideOne, sideTwo, sideThree;

sideOne = parseFloat(prompt("Enter the side of the first square:"));
sideTwo = parseFloat(prompt("Enter the side of the second square:"));
sideThree = parseFloat(prompt("Enter the side of the third square:"));

areaOne = sideOne * sideOne;
areaTwo = sideTwo * sideTwo;
areaThree = sideThree * sideThree;

if (areaOne === areaTwo && areaTwo === areaThree) {
  console.log("All areas are equal");
} else if (areaOne === areaTwo && areaOne > areaThree) {
  console.log("The areas of the first and second squares are equal and greater than the third");
} else if (areaTwo === areaThree && areaTwo > areaOne) {
  console.log("The areas of the second and third squares are equal and greater than the first");
} else if (areaOne === areaThree && areaOne > areaTwo) {
  console.log("The areas of the first and third squares are equal and greater than the second");
} else if (areaOne > areaTwo && areaOne > areaThree) {
  console.log("The area of the first square is the greatest");
} else if (areaTwo > areaOne && areaTwo > areaThree) {
  console.log("The area of the second square is the greatest");
} else {
  console.log("The area of the third square is the greatest");
}
