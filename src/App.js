import TodoWrapper from "./components/todoWrapper/TodoWrapper";
import "./App.css";
import React, { useReducer, useState } from "react";
import todoContext from "./contexts/todoContext";
function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [editableTodo, setEditableTodo] = useState(null);


  // explore useReducer 
  const reducer = (state, action) =>{
    console.log(state)
  }
  const data = useReducer(reducer, 0);
  console.log(data)

  //create an object with all states
  const todoState = {
    todoTitle,
    setTodoTitle,
    todos,
    setTodos,
    editableTodo,
    setEditableTodo,
  };

  return (
    <div className="App">
      <todoContext.Provider value={todoState}>
        <TodoWrapper todoState={todoState} />
      </todoContext.Provider>
    </div>
  );
}

export default App;
