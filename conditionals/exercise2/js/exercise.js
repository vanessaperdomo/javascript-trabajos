/*
   name exercise: Comparison of Three-Square Areas.
   description: calculates the area of three squares given 
   their sides and then: - Determine if all areas are the same. - Identify which 
   area is larger if they are different. Formula: Area = side².
   author: Laura Vanessa Perez Perdomo.
   date: march 20th, 2025
*/

let ageOne=0;
let ageTwo=0;
let ageThree=0;
let addAge;
let avarage;

ageOne= parseFloat(prompt("enter the first age:"));
ageTwo= parseFloat(prompt("enter the second age:"));
ageThree= parseFloat(prompt("enter the third age:"));

addAge= ageOne + ageTwo + ageThree;
avarage= addAge / 3;


if (ageOne >= 18) {
    console.log("the first person is of legal age:" + ageOne);
} else {
    console.log("the first person is a minor:" + ageOne);
}

if (ageTwo >= 18) {
    console.log("the second person is of legal age:" + ageTwo);
} else {
    console.log("the second person is a minor:" + ageTwo);
}

if (ageThree >= 18) {
    console.log("the third person is of legal age :" + ageThree);
} else {
    console.log("the third person is a minor :" + ageThree);
}

if (avarage >= 18) {
    console.log("the ages are avarage for the age of majority:" + avarage);
} else {
     console.log("the ages are avarage for minors:" + avarage);
}
