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
          <h2>Counter: {counter}</h2>
          <button onClick={handleIncrement}>Increament</button>
          <button onClick={handleDecreament}>Dcreament</button>
    </div>
  )
}

export default Counter