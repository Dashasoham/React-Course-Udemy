import React from 'react';
import useFetch from './hooks/useFetch';
import WeatherApp from './components/WeatherApp';
import ToDoList from './components/ToDoList';

function App() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      <WeatherApp />
      <ToDoList />
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
