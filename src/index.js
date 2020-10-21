import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './component/header/Header';
import Home from './component/body/Home'
import Footer from './component/footer/Footer';
import Signin from './component/body/Signin';

ReactDOM.render(
  <React.StrictMode>
    <Signin />
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
