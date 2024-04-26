import React, { useState } from 'react'

const Counter = () => {

    const [counter , setCounter] = useState(0)

    const handleIncrement = () =>{
        setCounter((prevState)=> prevState + 1) ;
    }
      
    const handleDecreament = () =>{

        setCounter((prevState)=> prevState -1) 
    }
  return (
    <div>
          <h2>Count: {counter}</h2>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecreament}>Decrement</button>
    </div>
  )
}

export default Counter