import { useState } from "react"

const EventHandling=()=>{


   const [count,setCount]= useState(0)
   function handleClick(){
    setCount(count+1);
   }

   function handleReset(){
    setCount(0);
   }


   return(
    <div>
    <h1> event Handling Example</h1>
    <p>Count:{count}</p>

<buton onClick={handleClick}>Increment</buton> 
<buton onClick={handleReset}>Reset</buton>

    </div>

   )
   
   
}