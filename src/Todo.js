import React from 'react'

export default function Todo({todo,toggleTodo}) {
  function handletodoclick(){
    toggleTodo(todo.id)
  }
  return (
    <div>
        <label>
        <input type="checkbox" checked={todo.complete} onChange={handletodoclick} />
         {todo.name} Date: {todo.date}
        </label>
    </div>
  )
}
