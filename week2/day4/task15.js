//function that recieves any no of args and returns their sum
function sumofnumbers(...a){
  let sum=0;
  for(let i of a){
    sum+=i
  }
  console.log(sum)
}
sumofnumbers(1,2,3,4)