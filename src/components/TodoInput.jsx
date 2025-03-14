import React, { useState } from 'react'

const TodoInput = ({handleAddTodo}) => {

  const [inputValue,setInputValue] = useState('');

  return (
    <div className='input-container'>
      <input value={inputValue} onChange={(e)=>{
        setInputValue(e.target.value)
      }} placeholder='Add Task'/>
      <button onClick={(e)=>{
        if(!inputValue){return}
        handleAddTodo(inputValue)
        setInputValue('')
        }}>
        <i className="fa-solid fa-plus"></i>
      </button>
        
    </div>
  )
}

export default TodoInput