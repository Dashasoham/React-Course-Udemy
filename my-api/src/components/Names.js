import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

function Names() {
  const [names, setNames] = useState();

  useEffect(() => {
    async function fetchNames() {
      try {
        const response = await axios.get(
          'https://randomuser.me/api/?results=5'
        );
        setNames(response.data.results.slice(0, 5));
      } catch (err) {
        console.log(err);
      }
    }
    fetchNames();
  }, []);

  return (
    <div>
      <h1>Names</h1>
      <p>
        {names &&
          names.map((person) => <div key={person.id}>{person.name.first}</div>)}
      </p>
    </div>
  );
}

export default Names;
