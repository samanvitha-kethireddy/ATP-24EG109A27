// Function to sum any number of arguments
function sumOfNumbers(...nums) {
  let sum = 0;

  // Add each number to sum
  for (let n of nums) {
    sum += n;
  }

  // Return the total
  return sum;
}

// Example usage
console.log(sumOfNumbers(1, 2, 3, 4)); // 10