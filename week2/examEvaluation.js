/*
Task:
1. Immediately display:
   "Exam submitted successfully"

2. After 2 seconds display:
   "Evaluating answers..."

3. After 4 seconds display:
   "Result: Pass"
*/

// Message shown immediately
console.log("Exam submitted successfully");

// Message shown after 2 seconds
setTimeout(() => {
  console.log("Evaluating answers...");
}, 2000);

// Message shown after 4 seconds
setTimeout(() => {
  console.log("Result: Pass");
}, 4000);