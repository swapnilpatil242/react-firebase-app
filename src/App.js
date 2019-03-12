import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Users from './components/users/Users'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/users" exact component={Users}></Route>
            <Footer />
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
