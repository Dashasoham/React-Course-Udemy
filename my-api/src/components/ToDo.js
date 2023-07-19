import { useEffect, useState } from 'react';
import axios from 'axios';

function ToDo() {
  const [todos, setTodos] = useState();
  //   useEffect(() => {
  //     fetch('http://localhost:4000/todos')
  //       .then((response) => response.json())
  //       .then((data) => setTodos(data))
  //       .catch((error) => console.error('Error:', error));
  //   }, []);
  // /////////////
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:4000/todos');

        // const data = await response.json();
        setTodos(response.data);
      } catch (error) {
        console.log('Error:', error);
      }
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:4000/todos')
  //     .then((response) => setTodos(response.data))
  //     .catch((error) => console.log('Error:', error));
  // });

  return (
    <div>
      hi you!!
      {todos &&
        todos.slice(0, 5).map((todo) => <div key={todo.id}>{todo.title}</div>)}
    </div>
  );
}

export default ToDo;
