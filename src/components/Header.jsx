import React from 'react'

const Header = ({todos,selectedTab}) => {

  const todosLength = todos.length;

  const numOfTasks =()=>{

    return (selectedTab) === 'All'?
    todosLength:
      selectedTab === 'Open'?
      todos.filter(val=>!val.complete).length : todos.filter(val=>val.complete).length
  } 

  const taskOrTasks= numOfTasks()>1?'Tasks':'Task';

  return (
    <header>
       {
        selectedTab==='All'?
        <h1 className='text-gradient'>
        You have {numOfTasks()} <span>Total</span> {taskOrTasks}.
        </h1>
        :
        <h1 className='text-gradient'>
          You have {numOfTasks()} {selectedTab} {taskOrTasks}.
        </h1>
       }
    </header>
  )
}

export default Header