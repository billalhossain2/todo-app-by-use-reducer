import "./Form.css";
import todoContext from "../../contexts/todoContext";
import { useContext } from "react";
const Form = () => {
  const {todoTitle, setTodoTitle, todos, setTodos, editableTodo, setEditableTodo} = useContext(todoContext)
  
  const handleChange = (ev) => setTodoTitle(ev.target.value);
  const addTodo = () => setTodos([...todos, {id: Date.now(),title: todoTitle, completed: false}]);
  
  const updateTodo = () =>{
    todos.forEach(todo=>{
      if(todo.id === editableTodo.id){
        todo.title = todoTitle
      }
    })
    setTodos([...todos]);
    setEditableTodo(null)
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    if(!todoTitle)return alert("Please enter a todo")
    !editableTodo ? addTodo() : updateTodo();
    setTodoTitle("");
  };

  return (
    <form action="#" onSubmit={submitHandler}>
      <input type="text" value={todoTitle} onChange={handleChange} />
      <input type="submit" value={!editableTodo ? "Add" : "Update"} />
    </form>
  );
};

export default Form;
