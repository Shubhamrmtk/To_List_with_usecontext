import React, { useContext } from 'react'
import { UserContex } from '../../../App'
import "./list.css"
const List = () => {
  const{storeTodos,DeletTodos}=useContext(UserContex)
  return (
    <div className='List'>
      {
        storeTodos.map((elm,index)=>{
          return <div className='listChild'>
            {elm}
            <button onClick={()=>{DeletTodos(index)}}>delete</button>
          </div>
        })
      }
    </div>
  )
}

export default List