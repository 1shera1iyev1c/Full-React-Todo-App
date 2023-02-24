import { useState } from "react";
import { List, Item } from "./components";

export default function App() {

  const [todo, setTodo] = useState([])
  const count = Math.round(Math.random() * 10)

  function handleAddTodo(evt) {
    
    if (evt.target.value) {
          if (evt.keyCode === 13) {
            const newTodo = {
              id: count,
              text : evt.target.value,
              isComplate : false,
            }
            setTodo([newTodo, ...todo])
            evt.target.value = null
        }
      
      }else {
        alert("To'ldir")
      }
    }


  return (
    <>
      <div className="container">
        <input type="text" onKeyUp={handleAddTodo} placeholder="Write..."/>

          {todo.length > 0 && 
            <List>
            {
              todo.map (todos => 
                <Item key={todos.id} todos={todos} allTodo={todo} setTodo={setTodo} />  
              ) 
            }
            </List>

          }
      </div>
    </>
  );
}


