import "./Form.css";
import todoContext from "../../contexts/todoContext";
import { useContext } from "react";
const Form = () => {
  const { todoTitle, setTodoTitle, editableTodo, setEditableTodo, dispatch } =
    useContext(todoContext);

  const handleChange = (ev) => setTodoTitle(ev.target.value);
  const addTodo = () => dispatch({ type: "ADD_TODO", payload: todoTitle });

  const updateTodo = () => {
    dispatch({
      type: "UPDATE_TODO",
      payload: { id: editableTodo.id, todoTitle },
    });
    setEditableTodo(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!todoTitle) return alert("Please enter a todo");
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
