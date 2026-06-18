import React from 'react'
import { useDispatch } from 'react-redux'
import { edit_todo, remove_todo } from './TodoAction';

export default function Todo({ todo }) {

  const dispatch = useDispatch();

  const editTodo = () => {
    var newContent = prompt("Edit the todo content: ", todo.content);
    if (newContent) {
      dispatch(edit_todo(todo.id, newContent));
    }
  }

  const deleteTodo = () => {
    dispatch(remove_todo(todo.id));
  }

  return (
    <div className='card border border-dark rounded-3'>
      <div className='card-body d-flex flex-row align-items-center justify-content-between'>
        <div>
          <h3 className='card-title'>{todo.content}</h3>
          <p className='card-text'><strong>Id:</strong> {todo.id}</p>
        </div>
        <div className='d-flex gap-2'>
          <button onClick={editTodo} className='btn btn-warning'>Edit</button>
          <button onClick={deleteTodo} className='btn btn-danger'>Delete</button>
        </div>
      </div>
    </div>
  )
}
