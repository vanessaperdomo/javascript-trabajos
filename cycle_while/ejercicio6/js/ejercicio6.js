/*
  name exercice: Calculation of Gravitational Potential Energy.
  description: The gravitational potential energy (Epg) of an object will be calculated
  according to the equation: Epg=m×g×h Epg = m \times g \times h. Additional conditions:  
  The total sum of the calculated potential energy must be accumulated, the number of times 
  the potential energy has been calculated must be counted, and the program will repeat 
  until the user enters a negative height.
  author: Laura Vanessa Perez Perdomo. 
  date: March 17th, 2025
*/


let epg;
let massObject = 0;
let gravity = 9.81;
let heightObject = 0;
let sumTotalEpg = 0;
let calculations = 0;

while (true) {
  massObject = parseFloat(prompt("Enter the mass object (N):"));
  heightObject = parseFloat(prompt("Enter the height object (negative value to stop) (m):"));

  if (heightObject <= 0) {
    break;
  }
  
  epg = massObject * gravity * heightObject;
  sumTotalEpg = sumTotalEpg + epg;
  calculations = calculations + 1;
  
  console.log("results");
  console.log("gravitational potential energy is:" + epg);
  console.log("Total accumulated epg is:" + sumTotalEpg)
}
 
console.log("\nShow");
console.log("Total accumulated epg:" + sumTotalEpg)
console.log("calculations made:" + calculations)
   
   
