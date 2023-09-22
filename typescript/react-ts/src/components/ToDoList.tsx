import React from "react";
interface ToDoListProps{
    items:{id:number,text:string}[]
}

const ToDoList:React.FC<ToDoListProps>=(props)=>{
    return <ul>
        {props.items.map(todo=><li key={todo.id}>{todo.text}</li>)}
    </ul>
}

export default ToDoList;