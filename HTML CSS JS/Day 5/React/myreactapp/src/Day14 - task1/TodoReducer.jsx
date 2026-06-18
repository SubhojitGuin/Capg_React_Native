const initialState = {
  todos: [],
  todoId: 0,
};

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";

const TodoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: state.todoId, content: action.payload }
        ],
        todoId: state.todoId + 1,
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      }
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id) ? 
            { ...todo, content: action.payload.content} : todo
        )
      }
    default:
      return state;
  }
}

export default TodoReducer;