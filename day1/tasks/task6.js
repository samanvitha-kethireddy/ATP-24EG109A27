//arg as array. return sum of array
let sumofarray = function (arr) {
    let sum = 0
    for(let i =0; i< arr.length; i++)
        sum+= arr[i]
    return sum
}
let arr = [10,20,30]
let result = sumofarray(arr)
console.log(result)