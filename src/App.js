
import { createContext, useState } from 'react';
import './App.css';
import Hearder from './component/Input/Header/Hearder';
import Input from './component/Input/Input';
import List from './component/Input/List/List';
// import Hearder from './component/Hearder';
// import { createContext, useState } from 'react';
// import Input from './component/Input/Input';
// export const UserContex=createContext()\
export const UserContex=createContext()


function App() {
  const [todos,setTodos]=useState("")
  const [storeTodos,setstoreTodos]=useState([])
  const inserTodoes=()=>{
    const temp=storeTodos
    setstoreTodos([...temp,todos])
    
  }
  const DeletTodos=(index)=>{
    console.log("delete")
const temp=storeTodos
temp.pop(index)
setstoreTodos([...temp])



  }

  return (<div className='App'>
<UserContex.Provider value={{inserTodoes,DeletTodos,storeTodos,setTodos}}>
  <Hearder/>

    <Input />
    
    <List />
</UserContex.Provider>
  </div>
    
  )
}

export default App;
