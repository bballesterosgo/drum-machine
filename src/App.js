import React from 'react';
import './App.css';
import DrumMachine from './components/DrumMachine';

function App() {
  return (
    <div className="App">
      <div className='title-logo-container'>
        <h1 className='title'>Drum Machine</h1>
      </div>
      <DrumMachine />  
    </div>
  );
}

export default App;
