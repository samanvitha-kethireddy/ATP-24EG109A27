/*🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t

*/
const user = {
 id: 101,
 name: "Ravi",
  preferences: {
  theme: "dark",
 language: "en"  }}

let scopy={...user}
// console.log(user)
// console.log(scopy)
scopy.name="bhanu";  //changes only in copy
scopy.preferences.theme="light"  //changes in both og and copy
console.log(user)
console.log(scopy)

 
              