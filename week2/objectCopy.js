// Original user object
const user = {
  name: "Ravi",
  city: "Hyd",
};

// Create a new object by copying user and adding age
const updatedUser = { ...user, age: 25 };

console.log("Original user:", user);
console.log("Updated user:", updatedUser);
