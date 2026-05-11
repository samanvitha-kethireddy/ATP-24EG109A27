//sum of elements in an array and finding the least element in it


//taking an array
let arr=[90,78,65,98]

//initializing values
let sum=0;
let min = arr[0];

//logic
for(let i = 0; i<arr.length; i++){

   //finding minimun element    
   if(arr[i]<min) 
              min = arr[i]

   //finding sum of array
    sum+=arr[i]
}
console.log('sum = ', sum, 'min = ' , min)