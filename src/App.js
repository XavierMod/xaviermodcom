import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'
import Website from './Website';

function App() {
  return (
    <BrowserRouter>
      <Website />
  </BrowserRouter>
  );
}

export default App;
