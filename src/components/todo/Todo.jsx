import React from "react";
import "./Todo.css";
import todoContext from "../../contexts/todoContext";
import { useContext } from "react";
const Todo = ({ todo }) => {
  const data = useContext(todoContext);
  const { setTodoTitle, todos, setTodos, setEditableTodo } = data;
  // const deleteTodo = id =>setTodos(todos.filter(todo => todo.id !== id));
  const deleteTodo = (id) => {
    const deletableIndex = todos.findIndex((todo) => todo.id === id);
    todos.splice(deletableIndex, 1);
    setTodos([...todos]);
  };

  const completeTodo = (id) => {
    // todos.forEach(todo =>{
    //   if(todo.id === id)todo.completed = !todo.completed;
    // })
    // setTodos([...todos]);
    const toggleId = todos.findIndex((todo) => todo.id === id);
    todos[toggleId].completed = !todos[toggleId].completed;
    setTodos([...todos]);
  };

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
