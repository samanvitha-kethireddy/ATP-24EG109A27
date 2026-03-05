/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : */
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

/*Tasks:
    1. Use filter() to get only inStock products  done
    2. Use map() to create a new array with:  { name, totalPrice }  done
    3. Use reduce() to calculate grand total cart value  done
    4. Use find() to get details of "Mouse"    done
    5. Use findIndex() to find the position of "Keyboard"  done */


    console.log(cart)
   let r1 = cart.filter((cartObj) =>cartObj.inStock)
  console.log("instock products ", r1)

  let r2=  cart.map((cartObj) => {
  return { name: cartObj.name, totalPrice: cartObj.price * cartObj.quantity }
    })
 console.log("mapped array ", r2)

  let r3 = cart.reduce((acc, cartObj) => acc + (cartObj.price * cartObj.quantity), 0)
  console.log("grand total ", r3)

    let r4 = cart.find((cartObj)=>cartObj.name=='Mouse')
   console.log(r4)

   let r5= cart.findIndex((cartObj)=>cartObj.name=='Keyboard')
   console.log(r5)
