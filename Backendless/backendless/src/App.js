import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/:tab' element={<List />} />

        {/* <Route path='/' element={<Table />} /> */}
        {/* <Route path='/chart' element={<Chart />} />
        <Route path='/list' element={<List />} /> */}

        {/* Lazy load components */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
