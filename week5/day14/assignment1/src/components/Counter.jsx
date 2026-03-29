import { useState } from "react";

function Counter(){
    //state
    const [count,setCount] = useState(0)

    const increment = ()=>(
        setCount(count+1)
    )
    const decrement = ()=>(
        setCount(count-1)
    )
    
    return(
        <div className="bg-green-400">

        </div>
    )

}

//incomplete