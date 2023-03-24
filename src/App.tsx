import React from 'react';
import logo from './logo.svg';
import WelcomeMessage from './Components/WelcomeMessage/WelcomeMessage';
import AboutMe from './Components/AboutMe/AboutMe';
import Interests from './Components/Interests/Interests';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeMessage/>
      </header>
      <div className='App-content'>
        <ParallaxProvider>
          <AboutMe/>
          <Interests/>
        </ParallaxProvider>
      </div>
    </div>
  );
}

export default App;
