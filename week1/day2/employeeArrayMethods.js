const employees = [
  { eno: 101, name: "Ravi", marks: [78, 82, 91] },
  { eno: 102, name: "Bhanu", marks: [65, 70, 78] },
  { eno: 103, name: "Sneha", marks: [88, 92, 95] },
  { eno: 104, name: "Kiran", marks: [55, 60, 58] },
  { eno: 105, name: "Anitha", marks: [90, 85, 87] },
];

// 1. Insert new employee at 2nd position
employees.splice(1, 0, {
  eno: 737,
  name: "Sam",
  marks: [77, 88, 99],
});
console.log("After inserting Sam:", employees);

// 2. Remove employee with name "Kiran"
const kiranIndex = employees.findIndex(emp => emp.name === "Kiran");
if (kiranIndex !== -1) {
  employees.splice(kiranIndex, 1);
}
console.log("After removing Kiran:", employees);

// 3. Change Sneha’s last mark from 95 to 75
const sneha = employees.find(emp => emp.name === "Sneha");
if (sneha) {
  sneha.marks[sneha.marks.length - 1] = 75;
}
console.log("After updating Sneha’s marks:", employees);
