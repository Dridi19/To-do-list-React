import React from 'react'
import Todo from './Todo.js'
export default function Todolist({todos,toggleTodo}) {
  return (
   
        todos.map(element => {
            return <Todo key={element.id} todo={element} toggleTodo={toggleTodo} />
                })

  )
}
