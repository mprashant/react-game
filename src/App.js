import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Play Nine</h1>
      //   </header>
      //   <Game />
        
      // </div>
      <Game/>
    );
  }
}

export default App;
