/*
  name exercise: vectores.
  description: vectores.
  autor: Laura Vanessa Perez Perdomo.
  date: march 20th 2025
*/


let vector = [];
let iteration;
let number;
 
for (iteration=0;iteration<10;iteration++){
     number=Math.floor(Math.random()*100);
     vector.push(number);
}

console.log(vector);

let maximo=Math.max(...vector);
let minimo=Math.min(...vector);

console.log("maximo: "+ maximo);
console.log("minimo: "+ minimo);

let pares = vector.filter(number => number % 2 == 0);
let impares = vector.filter(number => number % 2 == 0);


console.log("pares:" + pares);
console.log("impares:" + impares);



