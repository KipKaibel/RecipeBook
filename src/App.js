import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './component/header/Header';
import Home from './component/body/Home';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      
        <Header />
        <Home />
        <Footer />
     
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
