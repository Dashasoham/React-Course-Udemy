import React, {useState} from 'react';
import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";
import { ToDo } from "./components/todo.model";

const App:React.FC=()=> {
const [todos,setTodos]=useState<ToDo[]>([])



  const todoAddHandler=(enteredText:string)=>{
    setTodos(prevTodos=>
       [...prevTodos,{id:Math.random(),text:enteredText}]
)}

const ToDoDeleteHandler=(todoId:number)=>{
  setTodos(prevTodos=>
   prevTodos.filter(todo=>todo.id!==todoId)
  )



}
  
  return (
    <div className="App">
      <NewToDo onAddToDo={todoAddHandler}/>
   <ToDoList items={todos} deleteItem={ToDoDeleteHandler}/>
    </div>
  );
}

export default App;
