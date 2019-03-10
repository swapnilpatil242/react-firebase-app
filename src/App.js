import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from '../src/components/header/Header'
import Footer from '../src/components/footer/Footer'
import Home from '../src/components/home/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Home />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
