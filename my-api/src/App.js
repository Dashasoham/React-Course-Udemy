import './App.css';

import ToDo from './components/ToDo';
import Names from './components/Names';
import Cities from './components/Cities';
import YouTubeForm from './components/YouTubeForm';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <YouTubeForm />
        <ToDo />
        <Names />
        <Cities />
      </header>
    </div>
  );
}

export default App;
