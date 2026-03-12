/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35 done
    2. map() to convert all temperatures from Celsius → Fahrenheit done
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28  done*/

 let temp = [32, 35, 28, 40, 38, 30, 42]   
 let r1= temp.filter((Element)=>Element>35)
 console.log(temp)
 console.log(r1)

 let r2 = temp.map((Element)=>((Element*(9/5))+32))
 console.log(r2)

 let r4= temp.findIndex((Element)=>Element==28)
 console.log(r4)

