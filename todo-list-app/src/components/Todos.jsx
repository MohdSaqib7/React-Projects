import {TodoItem} from './TodoItem'
import React from 'react'

export const Todos = (props) => {
    return (
        <div className='todoslist'>
            {props.todos.length===0? "No Todos available":  
                props.todos.map((todo)=>{
                console.log(todo.sno);
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
                )})
            } 
        </div>
    )
}