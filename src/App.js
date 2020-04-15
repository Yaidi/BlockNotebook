import React, { useEffect } from 'react';
import Routes from './Router';

import initFirebase from './firebase';
import './styles/App.css';

function App() {
  useEffect(() => {
    initFirebase();
  }, []);
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
