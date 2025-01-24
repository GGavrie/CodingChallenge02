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

// Task 3 - Working with Objects
let employee = {
    name: "Jason Calliste",
    age: 28,
    department: "IT",
    isActive: true
};

// Update department
employee.department = "Marketing and Innovation";

// Add new position property
employee.position = "Senior Lab Coordinator";

// Log updated employee object
console.log("Updated employee details:", {
    Name: employee.name,
    Age: employee.age,
    Department: employee.department,
    Position: employee.position,
    "Active Status": employee.isActive
});