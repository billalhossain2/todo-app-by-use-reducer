import React from 'react'
import "./Todos.css";
import Todo from '../todo/Todo';
import todoContext from '../../contexts/todoContext';
import { useContext } from 'react';
const Todos = () => {
  const {todos} = useContext(todoContext);
  return (
    <div>
      {
        todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
      }
    </div>
  )
}

export default Todos