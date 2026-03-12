// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
  return typeof title === "string" && title.trim().length >= 3;
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
  const validPriorities = ["low", "medium", "high"];
  return typeof priority === "string" && validPriorities.includes(priority.toLowerCase());
}

// 3. Validate due date (must be future date)
function validateDueDate(date) {
  const dueDate = new Date(date);
  const now = new Date();
  return dueDate instanceof Date && !isNaN(dueDate) && dueDate > now;
}

export { validateTitle, validatePriority, validateDueDate };