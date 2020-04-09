import React, { Component } from 'react'
// Style
import './css/main.css'
// Components
import TicTacToeAi from './components/TicTacToeAi'


export class App extends Component {
  render() {
    return (
      <div>
        <TicTacToeAi />
      </div>
    )
  }
}

export default App
