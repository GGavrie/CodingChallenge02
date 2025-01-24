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

// Add new position 
employee.position = "Senior Lab Coordinator";

// Log updated employee information
console.log("Updated employee details:", {
    Name: employee.name,
    Age: employee.age,
    Department: employee.department,
    Position: employee.position,
    "Active Status": employee.isActive
});

// Task 4 - Initialize customers array with objects
let customers = [
    {
        name: "Jason Calliste",
        email: "Jason.Calliste@gmail.com",
        purchaseAmount: 150
    },
    {
        name: "Gavrie Grant",
        email: "Gavrie.grant@gmail.com",
        purchaseAmount: 300
    },
    {
        name: "Michael Blackburne",
        email: "michael.blackburne@gmail.com",
        purchaseAmount: 75
    }
];

// Added a new customer object to the array
customers.push({
    name: "Emma Grant",
    email: "emma.grant@gmail.com",
    purchaseAmount: 200
});

// Loged the entire customer list 
console.log("Customer List:");
customers.forEach((customer, index) => {
    console.log(`
    Name: ${customer.name}
    Email: ${customer.email}
    Purchase Amount: $${customer.purchaseAmount}`);
});

//Task 5 - objects methods
// Calculate total purchase amount 
const totalPurchases = customers.reduce((sum, customer) => 
    sum + customer.purchaseAmount, 0);
console.log(`Total purchase amount: $${totalPurchases}`);


//  Object order with properties: orderId, customerName, and amount
const order = {
    orderId: "ORD-2025-TT",
    customerName: "Jason Calliste",
    amount: 250.00,
    
    // Method to calculate tax
    calculateTax: function() {
        const TAX_RATE = 0.10; // 10% tax rate
        return this.amount * TAX_RATE;
    },
    // Method to display order details
    displayOrderDetails: function() {
        console.log(`
    Order Details:
    Order ID: ${this.orderId}
    Customer Name: ${this.customerName}
    Amount: $${this.amount}
    Tax amount: $${this.calculateTax()}
    `);
    }
};

// Log order details
order.displayOrderDetails();
