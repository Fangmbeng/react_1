import React, { useState, useRef } from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from 'uuid';


function App () {
    const [todos, setTodos] = useState([{ name: 'eat breakfast', id: 0, isComplete: false }]);
    const addRef = useRef();

    function addTodo (event) { 
        const taskName = addRef.current.value;
        if (taskName) {
            setTodos(oldTodos => {
                return [...oldTodos, { id: uuidv4, name: taskName, complete: false}]
            })
            addRef.current.value = null;
        } else {
            return null
        }
    }

    function checkbox (id) {
        const newStuff = [...todos];
        const todo = newStuff.find(specificItem => specificItem.id === id)
        todo.isComplete = !todo.isComplete;
        setTodos(newStuff)
    }
    
    function clearTodo () {
        const newTodo = todos.filter(todo => !todo.isComplete);
        setTodos(newTodo)
    }
    return (
        <>  
            <TodoList todos={todos} checkbox={checkbox}/>
            <input ref={addRef} type="text"/>
            <button onClick={addTodo}>Add item </button>
            <button onClick={clearTodo}>Clear item</button>  
            <div>let's Do It</div>
        </>
    )
};


export default App;
