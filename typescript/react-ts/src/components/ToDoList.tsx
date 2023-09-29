import React from "react";
import './ToDoList.css'

interface ToDoListProps{
    items:{id:number,text:string}[];
    deleteItem:(todoId:number)=>void
}

const ToDoList:React.FC<ToDoListProps>=(props)=>{

const deleteToDo=(todoId:number)=>{
    props.deleteItem(todoId)

}
    return <ul>
        {props.items.map(todo=><li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={()=>deleteToDo(todo.id)}>DELETE</button>

            </li>)}
    </ul>
}

export default ToDoList;