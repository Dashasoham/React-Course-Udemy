import { useEffect, useState } from 'react';

function ToDo() {
  const [todos, setTodos] = useState();
  //   useEffect(() => {
  //     fetch('http://localhost:4000/todos')
  //       .then((response) => response.json())
  //       .then((data) => setTodos(data))
  //       .catch((error) => console.error('Error:', error));
  //   }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:400/todos');

        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.log('Error:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      hi you!!
      {todos && todos.map((todo) => <div key={todo.id}>{todo.title}</div>)}
    </div>
  );
}

export default ToDo;
