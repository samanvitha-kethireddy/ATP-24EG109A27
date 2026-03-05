/*Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged*/


const order = {
orderId: "ORD1001",
customer: {
 name: "Anita",
  address: {
   city: "Hyderabad",
   pincode: 500085}},
  items: [
 { product: "Laptop", price: 70000 } ]}

 let copy = structuredClone(order)
 copy.customer.address.city="chennai"
 copy.items[0].price=100
 console.log(order)
 console.log(copy)