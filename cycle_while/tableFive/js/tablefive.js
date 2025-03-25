/*
  name exrcice: table five
  description: perform the multiplication table of 5 that multiplies 
  up to 5 and should print the result.
  author: Laura Vanessa Perez Perdomo.
  date: March 20th, 2025
*/


let number = 5;
let counter = 0;
let product;

while (counter < 5) {  
    counter = counter + 1; 
    product = number * counter; 
    console.log(number +  "x" + counter + "=" + product);
}
