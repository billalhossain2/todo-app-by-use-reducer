import TodoWrapper from "./components/todoWrapper/TodoWrapper";
import "./App.css";
import React, { useReducer, useState } from "react";
import todoContext from "./contexts/todoContext";
import todosState from "./todosState/todosState";
import todoReducer from "./reducers/todoReducer";
function App() {
  const [todoTitle, setTodoTitle] = useState("");

  const [editableTodo, setEditableTodo] = useState(null);

  const [todos, dispatch] = useReducer(todoReducer, todosState);

  const todoState = {
    todoTitle,
    setTodoTitle,
    todos,
    editableTodo,
    setEditableTodo,
    dispatch
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
