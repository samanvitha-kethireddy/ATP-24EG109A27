//sum of marks[90,78,65,98] and min element
let marks=[90,78,65,98]
let sum=0;
let min = marks[0];
for(let i = 0; i<marks.length; i++){
   if(marks[i]<min) min = marks[i]
    sum+=marks[i]
}
console.log('sum = ', sum, 'min = ' , min)