/*
  name exercice: Calculation of Mechanical Work.
  description: The mechanical work (W) performed on an object will be calculated 
  according to the equation: W=F×dW = F \times d Where: f is the applied force and 
  d is the distance traveled. Additional conditions: The total sum of the work 
  performed in all executions must be accumulated, the number of times the mechanical 
  work has been calculated must be counted, and the program will repeat until the user 
  enters a negative distance.
  author: Laura Vanessa Perez Perdomo. 
  date: March 20th, 2025
*/


let mechanicalWork = 0;
let count = 0;
let force = 0;
let distanceTraveled = 0;
let workTotal = 0;

while (true) {
  force = parseFloat(prompt("Enter the applied force (N):"));
  distanceTraveled = parseFloat(prompt("Enter the distance traveled (negative value to stop) (m):"));

  if (distanceTraveled < 0) {
    break;
  }

  mechanicalWork = force * distanceTraveled;
  workTotal = workTotal + mechanicalWork;
  count = count + 1;

  console.log("print");
  console.log("mechanical work is: " + mechanicalWork);
  console.log("Total accumulated work is: " + workTotal);
}

console.log("\nResults");
console.log("Total accumulated work: " + workTotal);
console.log("calculations made: " + count);

