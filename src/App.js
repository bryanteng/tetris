import React, { Component } from 'react';
import './App.css';
import Board from './components/Board'
import PieceDisplay from './components/PieceDisplay'

class App extends Component {
  render() {
    return (
      <div className="App wrapper">
        <Board />
        <PieceDisplay />
      </div>
    );
  }
}

export default App;
