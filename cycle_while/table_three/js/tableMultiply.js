/*
  name exrcice: times table from one to five.
  description: Perform multiplication tables from 1 to 5, and multiply up to five.
  The following results should be printed. For even results, the word "buzz" should
  be printed, and for odd results, the word "bass." The number of odd and even numbers
  in the multiplication results should be printed.
  author: Laura Vanessa Perez Perdomo.
  date: March 20th, 2025
*/

let tableNumber = 1;
let bass = 0;
let buzz = 0;
let counter = 0;
let result;

while (tableNumber < 6) {
  counter = 1;
  while (counter <= 5) {
    result = tableNumber * counter;
    if (result % 2 === 0) {
      console.log(tableNumber + "x" + counter + "=" + result + " buzz");
      buzz = buzz + 1;
    } else {
      console.log(tableNumber + "x" + counter + "=" + result + " bass");
      bass = bass + 1;
    }
    counter = counter + 1;
  }
  tableNumber = tableNumber + 1;
}

console.log("Total buzz (pares): " + buzz);
console.log("Total bass (impares): " + bass);
