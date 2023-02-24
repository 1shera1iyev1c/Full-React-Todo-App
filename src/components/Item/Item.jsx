import React from 'react'
import './Item.css'

export default function Item({todos, allTodo, setTodo}) {

  function handleDelTodo(delTodo) {
    const filtered = allTodo.filter(todo => todo.id != delTodo)

    setTodo(filtered)
  }

  function handleEditTodo(todo) {
    const editTodo = prompt('Edit text', todos.text)

    allTodo.forEach((element) =>{
      if (element.id === todo.id) {
        element.text = editTodo
        setTodo([...allTodo])
      }
    })
  }

  return (
    
    <li>
        <input type="checkbox" />
        <p>{todos.id}</p>
        <h3>{todos.text}</h3>
        <button onClick={() => handleDelTodo(todos.id)}>Del</button>
        <button onClick={() => handleEditTodo(todos)}>Edit</button>
    </li>
    
  )
}
