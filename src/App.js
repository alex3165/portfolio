import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="title">Hi</h1>
          <h2>I am Alexandre Rieux, from <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">🇫🇷</span></h2>
          <h2>Working in <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">🇬🇧</span></h2>
        </header>
        <main>
          <p>I am software engineer focusing on quality, efficiency and creativity.</p>
        </main>
        <footer>
          <ul className="list">
            <li className="el"><a href="https://github.com/alex3165" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li className="el"><a href="https://twitter.com/alex_picprod" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li className="el"><a href="https://www.linkedin.com/in/alexandrerieux/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
            <li className="el"><a href="/31_01_2017_rieux-Alexandre.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
