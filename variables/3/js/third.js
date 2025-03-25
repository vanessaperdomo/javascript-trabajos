/*
   name exrcice: calculate a person's total payment with a discount.
   description: The days of work and the value of the day will be 
   calculated to know the salary and do the calculations.
   author: Laura Vanessa Perez Perdomo 
   date: March 15th, 2025
*/


let salary;
let daysWork = 30;
let valueDay = 48750;
let health;
let pension;
let arl;
let discount;
let fullPayment;

salary = daysWork * valueDay;
health = salary * 0.12;
pension = salary * 0.16;
arl = salary * 0.052;
discount = health + pension + arl;
fullPayment = salary - discount;


console.log("salary: " + salary);
console.log("health: " + health);
console.log("pensión: " + pension);
console.log("arl: " + arl);
console.log("discount: " + discount);
console.log("Result fullPayment: " + fullPayment);
