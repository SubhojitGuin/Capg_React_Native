import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import Todo from './Todo';
import { add_todo } from './TodoAction';

export default function TodoList() {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [ newContent, setNewContent ] = React.useState("");

  const handleAddTodo = () => {
    dispatch(add_todo(newContent));
    alert("Todo added successfully");
    setNewContent("");
  }

  return (
    <div className='container mt-2'>
      <h1 className='text-center w-100 text-bg-primary py-2 rounded'>Todos List</h1>
      <div className='border rounded p-3 my-2'>
        <h2>Add new todo</h2>
        <div className='d-flex flex-row gap-2'>
          <input className='form-control' type="text" value={newContent} onChange={(e) => setNewContent(e.target.value)} />
          <button className='btn btn-success' onClick={handleAddTodo} >Add Todo</button>
        </div>
      </div>

      <div className='d-flex flex-column gap-2 card-group overflow-auto'>
        {
          todos.map((todo) => 
            <Todo key={todo.id} todo={todo}/>
          )
        }
      </div>
    </div>
  )
}
