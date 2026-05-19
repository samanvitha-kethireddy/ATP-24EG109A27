import {create} from 'zustand'

export const useCounterStore = create((set)=>({
    //state
    newCounter:0,
    //add user state(name,age,email)
    user:{name:"pari",email:"pari@mail.com",age:21},
    //function to change mail
    changeEmail:()=>set({...user,email:"sam@mail.com"}),
    //change name and age
    changeNameAndAge:()=>set({...user,name:"sam", age:19}),
    //functions to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    //change counter to 500
    set500:()=>set({newCounter:500}),
    //decrement by 20
    decCounter20:()=>set(state=>({newCounter:state.newCounter-20}))
}))
