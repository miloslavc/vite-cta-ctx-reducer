import React from 'react';
import './App.css';
import Count from './components/Count';

import StoreContextProvider from './store/count-context';

function App() {
  return (
    <StoreContextProvider>
      <div className="App">
        <header className="App-header">
          <p>Hello Vite + React!</p>
          <Count />
        </header>
      </div>
    </StoreContextProvider>
  );
}

export default App;
