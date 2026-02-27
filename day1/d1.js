//dynamically typed prog lang
//let a; declaration of variable. no specific data type.  can also use const
//a=10; assignment
//let b = 10; initialization

let A = 10//number
let B = 20
let username = 'sam'//string
//console.log("a=" , A, " b=" , B)    (can use + and , for concatiation)
//console.log(`a is ${A} b is ${B}`)   (; not needed)
let mark = [85,80,80]//group of elements. array. can be hetrogeneous but not recommended cus confusing
let status = false; //boolean
let person = {
    pid:27,
    name:'sam',
    age:18
} //object.group of properties.

// console.log('NAME:' +person.name ) //access obj properties. can use ' and " for printing
let x 
//console.log(typeof x) //o/p: undefined
x =10
//console.log(typeof x)//o/p: number
x = 'sam'
//console.log(typeof x)//o/p: string
x= [1,2,3] // array and object both belong to object only. object stored in heap memory
//console.log(typeof x)//o/p : object

// = for assignment, == for comparision(ignores data types), === strict comparision(compares data types too)








//let a = function(){ return 'hi'} //can store function in a variable. call it using variable name. known as function expression
//let b = function(a,b){ sum= a+b return sum} //this is a nameless or anoynomus function.
//let b = test function(){} //this is a function
//to simplify function expression, use arrow function. to use arrow function, function must have only 1 line and must return a value
// let test1 = (a,b) => a+b;
//above is same as below
// let b = test1 function(a,b) {sum= a+b return sum} 
 

