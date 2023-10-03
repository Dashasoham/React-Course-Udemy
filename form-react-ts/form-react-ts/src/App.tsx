import React from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import ListComponent from "./components/ListComponent";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <FormComponent />
      <ListComponent/>
      </header>
    </div>
  );
}

export default App;
