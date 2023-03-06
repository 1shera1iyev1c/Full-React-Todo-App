import React, { useRef } from "react";

export default function Item({ todos, allTodo, setTodo }) {
  const elTitle = useRef(null);

  function handleDelTodo(delTodo) {
    const filtered = allTodo.filter((todo) => todo.id != delTodo);

    setTodo(filtered);
  }

  function handleEditTodo(todo) {
    const editTodo = prompt("Edit text", todos.text);

    allTodo.forEach((element) => {
      if (element.id === todo.id) {
        element.text = editTodo;
        setTodo([...allTodo]);
      }
    });
  }

  function handleCheckTodo(evt, todoId) {
    console.log(evt.target.checked);
    allTodo.forEach((element) => {
      if (element.id === todoId) {
        element.isComplate = evt.target.checked;
        setTodo([...allTodo]);
      }
    });

    if (evt.target.checked) {
      elTitle.current.style.textDecoration = "line-through";
    } else {
      elTitle.current.style.textDecoration = "none";
    }
  }

  return (
    <li className="w-100 pe-4 ps-4 pt-2 pb-2 d-flex justify-content-between align-items-center mt-3 border rounded">
      <div className="d-flex align-items-center ">
        <input
          onChange={(evt) => handleCheckTodo(evt, todos.id)}
          type="checkbox"
        />
        <h3 className="ms-5" ref={elTitle}>
          {todos.text}
        </h3>
      </div>
      <div className="d-flex rounded btn btn-secondary">
        <span className="text-light">{todos.timeHour}:</span>
        <span className="text-light">{todos.timeMin}:</span>
        <span className="text-light">{todos.timeSec}</span>
      </div>
      <div>
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
          Del
        </button>
      </div>
    </li>
  );
}
