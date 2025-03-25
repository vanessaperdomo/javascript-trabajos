 /*
    name exercise: Calculation of Net Salary with Deductions
    description: Calculate a person's total salary by applying the following rules: 
    - If the salary is less than two minimum wages, add the transportation subsidy 
    of $114,000. - Apply the following deductions: - Health = salary × 0.12 
    - Pension = salary × 0.16 - ARL = salary × 0.052 - If the salary is greater than
    four minimum wages, subtract a 0.04% withholding. - Calculate and print the total 
    due after deductions.
    author: Laura Vanessa Perez Perdomo
    date: march 20th, 2025
*/


let salaryPerson;
let salaryTotal;
let discounts;
let salaryDiscounts;
let retention;
let salaryNeto;
let health;
let pension;
let arl;

const salaryMinimo = 1623500;
const subsidioTransporte = 114000;

salaryPerson = parseFloat(prompt("Ingrese su salario sin puntos ni comas:"));

console.log("Salario ingresado:" + salaryPerson);

salaryTotal = salaryPerson;

if (salaryPerson <= 2 * salaryMinimo) {
  salaryTotal = salaryPerson + subsidioTransporte;
} else {
  salaryTotal = salaryPerson;
}

console.log("Salario total:" + salaryTotal);

health = salaryPerson * 0.12;
pension = salaryPerson * 0.16;
arl = salaryPerson * 0.052;

console.log("Descuento de la salud:" +  health);
console.log("Descuento de la pension:" +  pension);
console.log("Descuento de la arl:" +  arl);

discounts = health + pension + arl;

console.log("Total descuentos:" + discounts);

salaryDiscounts = salaryTotal - discounts;

console.log("Salario despues de descuentos:" + salaryDiscounts);

if (salaryTotal > 4 * salaryMinimo) {
  retention = salaryTotal * 0.04;
} else {
  retention = 0;
}

console.log("Retencion:" + retention);

salaryNeto = salaryDiscounts - retention;

console.log("Su salario neto es:" + salaryNeto);
