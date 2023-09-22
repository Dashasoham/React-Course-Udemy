import React, {useRef} from "react";

const NewToDo:React.FC=()=>{
    const textInputRef=useRef<HTMLInputElement>(null)

    const todoSubmitHandler=(event:React.FormEvent)=>{
event.preventDefault()
const enteredText=textInputRef.current!.value
console.log(enteredText)   
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