import React from 'react'
import DataLoop from './DataLoop';

export const TodoList = ({todos, checkbox}) => {
  return (
        todos.map( todo => {
            return <DataLoop key={todo.id} checkbox={checkbox} todo={todo}/>
        })
    )
}
