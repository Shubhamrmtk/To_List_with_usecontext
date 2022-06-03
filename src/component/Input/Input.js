import React, { useContext } from 'react'
import { UserContex } from '../../App'


const Input = () => {
  const{setTodos,inserTodoes}=useContext(UserContex )
  return (
    <div>
      <input type="text" onChange={(e)=>{setTodos(e.target.value)}} />

      <button onClick={()=>{inserTodoes()}}>click me</button>

    </div>
    
  )
}

export default Input