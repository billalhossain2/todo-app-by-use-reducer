const todoReducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...todos,
        { id: Date.now(), title: action.payload, completed: false },
      ];
    }

    case "DELETE_TODO": {
      return todos.filter((todo) => todo.id !== action.payload);
    }

    case "UPDATE_TODO": {
        return todos.filter(todo =>{
            if(todo.id === action.payload.id){
                todo.title = action.payload.todoTitle
            }
            return todo;
        })
    }

    case "TOGGLE_TODO": {
      return todos.filter((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    }
    default: {
      return todos;
    }
  }
};
export default todoReducer;
