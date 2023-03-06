import { useState } from "react";
import { List, Item } from "./components";

export default function App() {

  const [todo, setTodo] = useState([])
  const count = Math.round(Math.random() * 10)
  const date = new Date();

  function handleAddTodo(evt) {
    
    if (evt.target.value) {
       if (evt.keyCode === 13) {
          const newTodo = {
            id: count,
            timeHour : date.getHours(),
            timeMin : date.getMinutes(),
            timeSec : date.getSeconds(),
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
      <div className="conteiner bg-danger p-5 rounded-bottom">
        <input type="text" className="form-control" onKeyUp={handleAddTodo} placeholder="Write..."/>
      </div>

      <div className="conteiner">
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


