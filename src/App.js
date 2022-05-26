import React, { useState, useRef, useEffect } from 'react';
import Todolist from "./Todolist.js";
import { v4 as uuidv4 } from 'uuid';
function App() {
  const local_storage_key ="listtodo"
  const [todos, updatetodos]=useState([])
  const todoNameRef = useRef()
  const tododateRef = useRef()
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(local_storage_key))
    if (storedTodos){
    updatetodos(storedTodos)}
  },[])

  useEffect(()=>{
    localStorage.setItem(local_storage_key, JSON.stringify(todos))
  },[todos])
  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    updatetodos(newTodos)
  }


  function deletcompleted(e){
    const notcompleted = todos.filter(todo =>!todo.complete)
    updatetodos(notcompleted)
  }

  function Addtodos(e){
    const name = todoNameRef.current.value
    const date = tododateRef.current.value
    if (name === ""){ return}
    if (!date)return
    // console.log(name)
    updatetodos(lasttodos=>[...lasttodos,{id:uuidv4(), name:name,date:date ,complete : false }])
    console.log(todos)
    todoNameRef.current.value = ""
   
  }
  return (
    <div  className="conainera">
      <h1>List To DO</h1>
      <Todolist todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <input ref={tododateRef} type="date" />
      <button onClick={Addtodos}>ADD Todo</button>
      <button onClick={deletcompleted}>Clear Complete</button>
      <div>{todos.filter(todo=>!todo.complete).length} left to do</div>
    </div>
  );
}

export default App;
