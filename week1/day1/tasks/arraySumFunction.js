//function to find sum of an array

function sumOfArray(arr) {

  //initializing sum with 0  
  let sum = 0;
  //logic to find sum
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  //returning sum 
  return sum;
}

//taking an array 
const arr = [10, 20, 30];

//calling the function
const result = sumOfArray(arr);

//printing the answer
console.log(result); 