//in a game, creation must be once but levels must increase again and again
//example:
/*let creategame = function(name){
    return function(level){
        console.log(`user ${name} at level ${level}`)
    }
}
let createlevel= creategame('sam')
createlevel(1)
createlevel(2)
createlevel(3)
*/



//a function can have a function as an arg
//example:
/*let payment = function(amt,paymenttype){ //main function is payment
console.log(`payment of ${amt} has started`)
paymenttype()}
let upipay = function(){  //callback function cus its a function which is an arg for an other function
    console.log('upi payment done')} 
let cardpay = function(){    //callback function
    console.log('card payment done')}
payment(1000,upipay)
payment(200,cardpay)
*/



//every javascript function has closure by default. cus of this property, the variables of outside scope will be maintained temporarily in heap even though the outside function's execution is completed.
//example:





//collections -pack of data : array, object, array of objects.
//array
/*let marks=[90,98,89]
let names=['ravi','surya','kiran']

//for-of loop.  index level access only
for(let v of marks){
  console.log(v)//o/p: 90 98 89
}
*/


//object-- unauthorized collection
/*let student={
    sno:100, 
    sname:'aayushi', 
    sage: 18,
    scourse:'cs'
}
console.log(student)//o/p: { sno: 100, sname: 'aayushi', sage: 18, scourse: 'cs' }
//console.log(student.sno)  //o/p: 100
//or console.log(student['sno'])
*/

//for-in loop. only returns key
/*for(let v in student){
    //console.log(v) //o/p: sno sname sage scourse
     //console.log(student[v])  //o/p: 100 aayushi 18 cs
     console.log(`${v} is ${student[v]}`)   //o/p: sno is 100 sname is aayushi sage is 18 scourse is cs
}*/


//array of objects
/* let emps= [
    {eno:1, en: 'ravi'},
    {eno:2, en: 'surya'},
    {eno:3, en:'kiran'}
]
for(let e of emps){
    console.log(`eno is ${e.eno} and name is ${e.en}`) // o/p: eno is 1 and name is ravi and so on
}
*/






//AFTERNOON:

/*let student = {
    rollno: 1,
    fname: 'sam',
    lname: 'reddy',
    marks : [90,98,89], 
    address: {
        city: 'hyd',
        pin: 500039,
    },
    getfullname: function () {
        return this.fname + this.lname    //here this keyword should be used. otherwise, the function will search for that fname/lname outside the method.
    },
    getavgmarks: function(){
        let sum=0
        let num;
        num= this.marks.length            //same here. use this keyword
        for(let i=0; i<num;i++){
        sum+=this.marks[i] }
        return sum/num
    }
}

console.log(student.getfullname()) //o/p: samreddy
console.log(student.getavgmarks())  //o/p: 92.33333333333333
*/



//dynamic insertion in array
let testarray = [1,2,3]
//insertion at end of array - use push() . this returns the array length. can add 1+ elements at once
testarray.push(4,5)

//insertion at start of array- use unshift()  . also returns length. can add 1+ elements at once
testarray.unshift(-1,0)
// console.log(testarray) //o/p: [-1,0,1,2,3,4,5]

//insertion&deletion  in middle(index based) - use splice() . returns deleted elements. multiple elements at once allowed
testarray.splice(2,0,123)  // 2 is the index , 0 is the deletion sumthing?? , 123 is the element to insert
//console.log(testarray)  //o/p: [-1,0,123,1,2,3,4,5]


//dynamic deletion in array
//delete first element- use shift()
let removedele = testarray.shift()
//console.log(testarray)  //o/p: [0,123,1,2,3,4,5]

//delete last element - use pop()
let removedelem= testarray.pop()
//console.log(testarray)   //o/p: [0,123,1,2,3,4]

//delete in btw(index based)- use splice()
testarray.splice(1,2,3)
console.log(testarray) //i didnt nderstand this ache se