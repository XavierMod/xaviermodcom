import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'
import Landing from './components/landing/Landing';
import ProfilePage from './components/profile/profilePage';
import Projects from './components/projects/mainProjects';

function App() {
  return (
    <BrowserRouter>
      <Route path="/profile" component={ProfilePage} />
      <Route path="/projects" component={Projects} />
      <Route exact path="/" component={Landing} />
  </BrowserRouter>
  );
}

export default App;
