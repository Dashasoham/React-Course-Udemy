import './App.css';

import ToDo from './components/ToDo';
import Names from './components/Names';
import Cities from './components/Cities';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ToDo />
        <Names />
        <Cities />
      </header>
    </div>
  );
}

export default App;
