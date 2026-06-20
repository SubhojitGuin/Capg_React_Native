import React from 'react'

export default function TodoItem({ task }) {
  return (
    <div className='todo-item'>
      <div>
        <span>Title: </span>
        <span>{task.title}</span>
      </div>
      <div>
        <span>Status: </span>
        <span>{task.status}</span>
      </div>
      <div>
        <span>Priority: </span>
        <span>{task.priority}</span>
      </div>
    </div>
  )
}
