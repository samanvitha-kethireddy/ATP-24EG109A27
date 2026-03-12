// task.js
import { validateTitle, validateDueDate, validatePriority } from './validator.js';

let tasks = [];
let taskIdCounter = 1;

// 1. Add new task
export function addTask(title, priority, dueDate) {
  if (validateTitle(title) && validatePriority(priority) && validateDueDate(dueDate)) {
    tasks.push({
      id: taskIdCounter++,
      title,
      priority,
      dueDate: new Date(dueDate),
      completed: false
    });
    return true;   
  } else {
    return false;  
  }
}

// 2. Get all tasks
export function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = true;
    return true;   
  }
  return false;    
}