import React from 'react';
import logo from './logo.svg';
import WelcomeMessage from './Components/WelcomeMessage/WelcomeMessage';
import AboutMe from './Components/AboutMe/AboutMe';
import Interests from './Components/Interests/Interests';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeMessage/>
      </header>
      <AboutMe/>
      <Interests/>
    </div>
  );
}

export default App;
