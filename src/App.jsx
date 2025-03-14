import { useEffect, useState } from "react"
import Header from "./components/Header"
import Tabs from "./components/Tabs"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { TodoContext } from "./components/TodoContext"

function App() {

  const [todos,setTodos] = useState([  
    { input: 'Hello! Add your first todo!', complete: true },
  ]);

  const [selectedTab,setSelectedTab] = useState('All');

  const handleAddTodo=(newTodo)=>{
    const newTodoList = [...todos,{input:newTodo,complete:false}]
    setTodos(newTodoList);
  }

  const handleEditTodo = (index, newText) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, input: newText } : todo
      )
    );
  };

  const handleCompleteTodo=(index)=>{

    let newTodoList = [...todos];
    let completedTodo = { ...todos[index], complete: true };
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  const handleDeleteTodo=(todoIndex)=>{

    let newTodoList = todos.filter((val,valIndex)=>{
      return valIndex !== todoIndex;
    })
    setTodos(newTodoList);
  }

  const handleSaveData =(currentTodos)=>{
    localStorage.setItem('todo-app',JSON.stringify({todos: currentTodos}))
  }

  useEffect(()=>{
    if(!localStorage||localStorage.getItem('todo-app'))
      {return}

    let db = JSON.parse(localStorage.getItem('todo-app'));
    setTodos(db.todos);
  },[])

  return (
    <>
     <TodoContext.Provider value={{ handleCompleteTodo, handleDeleteTodo, handleEditTodo }}>
      <Header todos={todos} selectedTab={selectedTab}/>
      <Tabs setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList todos={todos} selectedTab={selectedTab} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </TodoContext.Provider>
    </>
  )
}

export default App
