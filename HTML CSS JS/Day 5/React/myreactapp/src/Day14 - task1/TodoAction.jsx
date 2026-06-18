import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./TodoReducer"

const add_todo = (content) => {
  return {
    type: ADD_TODO,
    payload: content
  }
}

const remove_todo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id
  }
}

const edit_todo = (id, content) => {
  return {
    type: EDIT_TODO,
    payload: {
      id: id,
      content: content
    }
  }
}

export { add_todo, remove_todo, edit_todo };