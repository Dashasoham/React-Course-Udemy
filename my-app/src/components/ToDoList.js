import { useState, useRef, useCallback, useEffect } from 'react';

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

  useEffect(() => {
    const storedToDoItems = localStorage.getItem('toDoItems');
    if (storedToDoItems) {
      setToDo(JSON.parse(storedToDoItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('toDoItems', JSON.stringify(toDo));
  }, [toDo]);

  return (
    <form onSubmit={handleTaskSubmit}>
      <input type='text' placeholder='Add a new task' ref={inputRef} />
      <button type='submit'>Add</button>
      <ul>
        {toDo.map((task, index) => (
          <div key={index}>
            <li>{task}</li>
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
