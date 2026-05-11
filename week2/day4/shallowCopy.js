//  Given a user object that has nested preferences.
const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};

/* Tasks:
   1. Create a shallow copy of user
   2. Modify properties in the copy
   3. Log both original and copied objects
   4. Observe differences
*/

// Step 1: Shallow copy using spread operator
let scopy = { ...user };

// Step 2: Change top-level property (safe, affects only copy)
scopy.name = "Bhanu";  

// Step 3: Change nested property (shallow copy shares reference)
scopy.preferences.theme = "light";  

// Step 4: Log results
console.log("Original User:", user);
console.log("Shallow Copy:", scopy);

/* note:
   - Changing `name` only affects the copy (primitive value).
   - Changing `preferences.theme` affects BOTH objects,
     because the nested object is still shared.
   - Spread operator = shallow copy, not deep copy.
*/
