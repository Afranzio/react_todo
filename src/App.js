import React from 'react';
import './App.css';
import Div from './components/div'
import Todo from './components/todo'

function App() {

  return (
    <div className="App">
      <Div />
      <div className='output'>
        <Todo />      
      </div>
    </div>
  );
}

export default App;
