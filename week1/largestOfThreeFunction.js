//function to find biggest of 3 numbers


function biggestOf3(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else {
    return "all equal";
  }
}

let result = biggestOf3(30, 10, 20);
console.log(`the biggest number of the given 3 is: `, result);
