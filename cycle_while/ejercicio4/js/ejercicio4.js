/*
  name exercice: motion simulation with newton first law.
  description: If the applied force is zero, the object remains at rest. If the 
  force is nonzero, the acceleration is calculated with: a=Fma = \frac{F}{m} And 
  the velocity is updated: v=v+a×tv = v + a \times t , where t = 1 s. Additional  
  conditions: The number of seconds the object has been moving must be counted, 
  the total distance traveled must be accumulated with: d=v×td = v \times t ,  and
  the program ends when the user enters a force of 0.
  author: Laura Vanessa Perez Perdomo. 
  date: March 20th, 2025
*/


let acceleration = 0;
let force = 0;
let mass = 0;
let sumTotal = 0;
let time = 0;
let speed = 0;
let distance = 0;

force = parseFloat(prompt("Enter the applied force (N):"));

if (force === 0) {
  console.log("The object remains at rest");
} else {
  mass = parseFloat(prompt("Enter the Object Mass (kg):"));
  if (mass <= 0) {
    console.log("The mass must be a positive value.");
  } else {
    while (true) {
      acceleration = force / mass;
      speed = speed + acceleration;
      distance = speed;
      sumTotal = sumTotal + distance;
      time++;

      console.log("print");
      console.log("Time elapsed: " + time + " s");
      console.log("Acceleration: " + acceleration + " m/s");
      console.log("Current speed: " + speed + " m/s");
      console.log("Distance traveled in this second: " + distance + " m");
      console.log("Total distance traveled: " + sumTotal + " m");
      force = parseFloat(prompt("Enter the applied force (N) (Enter 0 to finish):"));
      if (force === 0) {
        console.log("The object has stopped moving.");
        break;
      }
    }
    console.log("\nResults:");
    console.log("Total time in motion: " + time + " s");
    console.log("Total distance traveled: " + sumTotal + " m");
  }
}



      
      
