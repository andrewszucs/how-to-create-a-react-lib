import React from 'react';
import logo from './logo.svg';
import './App.css';

import { TestComponent } from 'how-to-create-a-react-lib';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <TestComponent color='lightgreen' background='blue' />
      </header>
    </div>
  );
}

export default App;
