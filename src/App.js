import React, { Component } from 'react';
import './App.css';
import { Footer } from './Footer';
import { Main } from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{}}>
          <h1 className="title">Hi</h1>
          <h2>
            I am Alexandre Rieux, from{' '}
            <span
              style={{ marginRight: 10 }}
              role="img"
              aria-labelledby="jsx-a11y/accessible-emoji"
            >
              🇫🇷
            </span>
            Working in London{' '}
            <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
              🇬🇧
            </span>
          </h2>
          <p
            style={{
              color: '#999',
              lineHeight: 1.5,
              marginTop: '40px',
              marginBottom: '60px',
              maxWidth: 600,
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Currently working as Technical Lead Engineer
            <a
              href="https://onthedot.com"
              rel="noopener noreferrer"
              target="_blank"
              style={{ marginLeft: 4 }}
            >
              @Onthedot
            </a>
            , making same day deliveries more efficient and reliable. I focus on
            quality code and scalable systems.
          </p>
        </header>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
