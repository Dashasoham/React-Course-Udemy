import { useState, useRef, useCallback } from 'react';

function ToDoList() {
  const [toDo, setToDo] = useState([]);
  const inputRef = useRef(null);

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    setToDo([...toDo, inputRef.current.value]);
    inputRef.current.value = '';
  };

  const handleDeleteButton = useCallback((index) => {
    setToDo((prevToDo) => prevToDo.filter((_, i) => i !== index));
  }, []);

  return (
    <form onSubmit={handleTaskSubmit}>
      <input type='text' placeholder='Add a new task' ref={inputRef} />
      <button type='submit'>Add</button>
      <ul>
        {toDo.map((task, index) => (
          <div>
            <li key={index}>{task}</li>
            <button type='button' onClick={() => handleDeleteButton(index)}>
              Delete Task
            </button>
          </div>
        ))}
      </ul>
    </form>
  );
}

export default ToDoList;
