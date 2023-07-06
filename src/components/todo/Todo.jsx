import React from "react";
import "./Todo.css";
import todoContext from "../../contexts/todoContext";
import { useContext } from "react";
const Todo = ({ todo }) => {
  const { setTodoTitle, setEditableTodo, dispatch } = useContext(todoContext);

  const deleteTodo = (id) => dispatch({ type: "DELETE_TODO", payload: id });
  const completeTodo = (id) => dispatch({ type: "TOGGLE_TODO", payload: id });

  const editTodo = (todo) => {
    setEditableTodo(todo);
    setTodoTitle(todo.title);
  };

  return (
    <div>
      <ul className="todoLists">
        <li>
          <button
            style={
              todo?.completed
                ? { color: "green", textDecoration: "line-through" }
                : {}
            }
            onClick={() => completeTodo(todo.id)}
          >
            {todo.completed ? "Incomplete" : "Complete"}
          </button>
          <span>{todo.title}</span>
          <button onClick={() => editTodo(todo)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
