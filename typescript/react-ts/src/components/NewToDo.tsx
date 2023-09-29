import React, {useRef} from "react";
import './NewTodo.css'

interface NewToDoProps {
    onAddToDo:(text:string)=>void
} 



const NewToDo:React.FC<NewToDoProps>=(props)=>{
    const textInputRef=useRef<HTMLInputElement>(null)

    const todoSubmitHandler=(event:React.FormEvent)=>{
    event.preventDefault()

    const enteredText=textInputRef.current!.value
    props.onAddToDo(enteredText)
    textInputRef.current!.value=''

}


  return(
     <form onSubmit={todoSubmitHandler}>
    <div>
    <label>  Text  </label>
<input type="text" ref={textInputRef}/>
    </div>
    <button type="submit">Add ToDo</button>
     </form>)
     
}

export default NewToDo;