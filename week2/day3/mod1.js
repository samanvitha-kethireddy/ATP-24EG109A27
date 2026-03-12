let data=[1,2,3]
let person={
    name:'sam',
    id:27
}
//export
  //default
    //export default {data,person}
//module can have only 1 default expo



  //named export  
  //can have multiple named exports
  //can just write export keyword before the let keyword
  //or instead of writing export keyword everytime, use below:
  export {data,person}



  //  import and export is only one way. dont do both of 2 files at same time cus it will give circular error kuchh
