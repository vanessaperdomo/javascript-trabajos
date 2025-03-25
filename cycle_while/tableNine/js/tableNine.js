/*
  name exrcice: table nine
  description: Make the 9 times table that multiplies up to 5 and from the 
  results print out which results are even and which results are not odd.
  author: Laura Vanessa Perez Perdomo.
  date: March 20th, 2025
*/

let number = 9;
let counter = 0;
let product;

while (counter < 5) {  
    counter = counter + 1; 
    product = number * counter;


    console.log(number + "x" + counter + "=" + product);

 
    if (product % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
