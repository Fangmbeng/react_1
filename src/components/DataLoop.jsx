import React from 'react';

export default function DataLoop ({ todo, checkbox }) {
    function checkedBox () {
        checkbox(todo.id)
    }

    return (
        <div>
            <input type='checkbox' checked={todo.isComplete} onChange={checkedBox} />
            {todo.name}
        </div>
  )
}
