/*
  name exercice: weight calculations on different planets.
  description: Calculate the weight of an object on different planets by entering 
  the mass and selecting the weight of any of the three planets. The result of the 
  weights is printed, a total sum of all weights is added, a counter is given for 
  the calculations performed, and the program ends if the mass is negative.
  author: Laura Vanessa Perez Perdomo. 
  date: March 20th, 2025
*/


let mass;
let gravity;
let weight;
let planet;
let totalWeight = 0;
let calculations = 0;

while (true) {
  mass = parseFloat(prompt("Enter the mass object (kg):"));
  if (mass < 0) {
    break;
  }

  planet = parseInt(prompt("select a planet: 1. Earth (9.81 m/s2) 2. Mars (3.71 m/s2) 3. Jupiter (24.79 m/s2)"));

  switch (planet) {
    case 1:
      gravity = 9.81;
      break;
    case 2:
      gravity = 3.71;
      break;
    case 3:
      gravity = 24.79;
      break;
    default:
      alert("invalid option. select a planet.");
      continue;
  }

  weight = mass * gravity;
  console.log("weight of object on select planet: " + weight + " N");

  totalWeight = totalWeight + weight;
  calculations++;
}

console.log("total sum off all weights: " + totalWeight + " N");
console.log("calculations made: " + calculations);
