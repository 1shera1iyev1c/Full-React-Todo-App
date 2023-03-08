import { useEffect, useState } from "react";
import { List, Item } from "./components";
import "./index.css";

export default function App() {
  const saveStorage = (data, dataName = "todos") => {
    localStorage.setItem(dataName, JSON.stringify(data));
  };

  const localData = JSON.parse(localStorage.getItem("todos")) || [];
  const [todo, setTodo] = useState(localData);
  const [count, setCount] = useState(0);
  const countTodo = Math.round(Math.random() * 10);
  const date = new Date();

  function handleAddTodo(evt) {
    if (evt.target.value) {
      if (evt.keyCode === 13) {
        const newTodo = {
          id: countTodo,
          timeHour: date.getHours(),
          timeMin: date.getMinutes(),
          timeSec: date.getSeconds(),
          text: evt.target.value,
          isComplate: false,
        };
        setTodo([newTodo, ...todo]);
        saveStorage([newTodo, ...todo]);
        evt.target.value = null;
      }
    } else {
      alert("To'ldir");
    }
  }

  useEffect(() => {
    if (count > 1) {
      document.body.style.background = "red";
    }
    if (count > 3) {
      document.body.style.background = "green";
    }
    if (count > 5) {
      document.body.style.background = "blue";
    }
    if (count > 7) {
      document.body.style.background = "purple";
    }
    if (count > 9) {
      document.body.style.background = "pink";
    }
    if (count > 11) {
      document.body.style.background = "black";
    }
    if (count > 13) {
      document.body.style.background = "blueviolet";
    }
    if (count > 15) {
      document.body.style.background = "darkolivegreen";
    }
    if (count > 17) {
      document.body.style.background = "crimson";
    }
    if (count > 19) {
      document.body.style.background = "hotpink";
    }
    if (count > 21) {
      document.body.style.background = "lightcoral";
    }
    if (count > 23) {
      document.body.style.background = "orange";
    }
    if (count > 25) {
      document.body.style.background = "tomato";
    }
    if (count > 27) {
      document.body.style.background = "salmon";
    }
    if (count > 29) {
      document.body.style.background = "seashell";
    }
  }, [count]);

  return (
    <>
      <div className="conteiner border content rounded-bottom border-dark p-5 d-flex align-items-end">
        <input
          type="text"
          className="form-control"
          onKeyUp={handleAddTodo}
          placeholder="Write..."
        />
        <button
          className="btn btn-success ms-2"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>

      <div className="conteiner">
        {todo.length > 0 && (
          <List>
            {todo.map((todos) => (
              <Item
                key={todos.id}
                todos={todos}
                allTodo={todo}
                setTodo={setTodo}
                saveStorage={saveStorage}
              />
            ))}
          </List>
        )}
      </div>
    </>
  );
}
