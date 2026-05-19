/*
Task:
1. Make a deep copy of the order object
2. Change:
   - customer city
   - first item's price
3. Check that original object does not change
*/

const order = {
  orderId: "ORD1001",

  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085,
    },
  },
  items: [ { product: "Laptop",
      price: 70000,},],
};

// Creating deep copy of order object
let copy = structuredClone(order);

// Changing values in copied object
copy.customer.address.city = "Chennai";
copy.items[0].price = 100;

// Printing original object
console.log("Original Object:");
console.log(order);

// Printing copied object
console.log("Copied Object:");
console.log(copy);
