import React, { useRef } from "react";
import "./Item.css";

export default function Item({ todos, allTodo, setTodo, saveStorage }) {
  const elTitle = useRef(null);

  function handleDelTodo(delTodo) {
    const filtered = allTodo.filter((todo) => todo.id != delTodo);

    setTodo(filtered);
    saveStorage(filtered);
  }

  function handleEditTodo(todo) {
    const editTodo = prompt("Edit text", todos.text);

    allTodo.forEach((element) => {
      if (element.id === todo.id) {
        element.text = editTodo;
        setTodo([...allTodo]);
        saveStorage([...allTodo])
      }
    });
  }

  function handleCheckTodo(evt, todoId) {
    console.log(evt.target.checked);
    allTodo.forEach((element) => {
      if (element.id === todoId) {
        element.isComplate = evt.target.checked;
        setTodo([...allTodo]);
        saveStorage([...allTodo]);
      }
    });

    if (evt.target.checked) {
      elTitle.current.style.textDecoration = "line-through";
    } else {
      elTitle.current.style.textDecoration = "none";
    }
  }

  return (
    <li className="w-100 mt-4 item p-3 d-flex justify-content-between align-items-center border-success">
      <div className="d-flex align-items-center ">
        <input
          onChange={(evt) => handleCheckTodo(evt, todos.id)}
          type="checkbox"
          checked={todos.isComplate ? true : false}
        />
        <h3 className={todos.isComplate ? 'complate ms-5 h4 d-block text-light' : 'ms-5 h4 d-block text-light text'} ref={elTitle}>
          {todos.text}
        </h3>
      </div>
      <div className="d-flex">
        <div className="d-flex rounded btn btn-secondary me-5">
          <span className="text-light">{todos.timeHour}:</span>
          <span className="text-light">{todos.timeMin}:</span>
          <span className="text-light">{todos.timeSec}</span>
        </div>
        <button
          className="btn btn-primary me-3"
          onClick={() => handleEditTodo(todos)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleDelTodo(todos.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
