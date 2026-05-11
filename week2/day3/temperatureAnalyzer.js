/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.*/


//Test data:
 let temp = [32, 35, 28, 40, 38, 30, 42]  

 //Tasks:
 
//1. filter() temperatures above 35 done
 let r1= temp.filter((Element)=>Element>35)
 console.log(`temperatures above 35:` ,r1)


 //2. map() to convert all temperatures from Celsius → Fahrenheit done
 let r2 = temp.map((Element)=>((Element*(9/5))+32))
 console.log(`temperature in fahrenheit:` ,r2)



 //3. reduce() to calculate average temperature
let r3 = temp.reduce((sum, t) => sum + t, 0) / temp.length;
console.log(`avg temperature:`, r3);


  //4. find() first temperature above 40
let r4 = temp.find(t => t > 40);
console.log(`First temperature above 40:`, r4);


 //5. findIndex() of temperature 28  done
let r5 = temp.findIndex(t => t === 28);
console.log(`Index of temperature 28:`, r5);