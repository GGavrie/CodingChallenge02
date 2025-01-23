// Task 1 - Working with Arrays
let products = ["Steel Pan", "Sweetbread", "Mauby", "Pelau", "Table"];
// Add a new product
products.push("Kennel");
// Remove the last product
products.pop();
// Printing the final product list  
console.log("Final product list:", products);


// Task 2 - Working with Numbers
let scores = [85, 92, 78, 95, 88];
// Update the second score
scores[1] = 96;
// Calculate average
let sum = 0;
for (let score of scores) sum += score;
let average = sum / scores.length;

console.log("Updated scores:", scores);
console.log("Average score:", average);