// app.js
import { addTask, getAllTasks, completeTask } from './task.js';

// 1. Add some tasks
console.log(addTask("abcd", "high", "2027-02-26")); // true
console.log(addTask("xy", "low", "2027-02-26"));    // false (title too short)

// 2. Display all tasks
console.log("All Tasks:", getAllTasks());

// 3. Complete a task
console.log(completeTask(1)); // true if task exists

// 4. Display all tasks again
console.log("Updated Tasks:", getAllTasks());