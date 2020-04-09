import React, { Component } from 'react'

class TicTacToe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cells: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      player: undefined,
      winnerFound: false,
    }
  }

  winner(pos) {
    this.setState({ winnerFound: true })
    console.log('Winner Found', this.state.cells[pos[0]][pos[1]])
  }
  checkWinner(pos) {
    var cells = this.state.cells
    // if Row match
    if (cells[0][0] === cells[0][1] && cells[0][1] === cells[0][2] && cells[0][2] !== '') {
      this.winner(pos)
    } else if (cells[1][0] === cells[1][1] && cells[1][1] === cells[1][2] && cells[1][2] !== '') {
      this.winner(pos)
    } else if (cells[2][0] === cells[2][1] && cells[2][1] === cells[2][2] && cells[2][2] !== '') {
      this.winner(pos)
    }
    // if coll match
    else if (cells[0][0] === cells[1][0] && cells[1][0] === cells[2][0] && cells[2][0] !== '') {
      this.winner(pos)
    } else if (cells[0][1] === cells[1][1] && cells[1][1] === cells[2][1] && cells[2][1] !== '') {
      this.winner(pos)
    } else if (cells[0][2] === cells[1][2] && cells[1][2] === cells[2][2] && cells[2][2] !== '') {
      this.winner(pos)
    }
    // paragonal match
    else if (cells[0][0] === cells[1][1] && cells[1][1] === cells[2][2] && cells[2][2] !== '') {
      this.winner(pos)
    } else if (cells[0][2] === cells[1][1] && cells[1][1] === cells[2][0] && cells[2][0] !== '') {
      this.winner(pos)
    }
  }

  handleClick(pos) {
    if (!this.state.winnerFound) {
      var newCells = this.state.cells
      if (this.state.player === 1) {
        if (newCells[pos[0]][pos[1]] === '') {
          newCells[pos[0]][pos[1]] = 'o'
          this.setState({
            cells: newCells,
            player: 2
          })
        }
      } else if (this.state.player === 2) {
        if (newCells[pos[0]][pos[1]] === '') {
          newCells[pos[0]][pos[1]] = 'x'
          this.setState({
            cells: newCells,
            player: 1
          })
        }
      }
      this.checkWinner(pos)
    }
  }

  selectPlayer() {
    var turn = Math.random()
    if (turn < 0.5) {
      this.setState({ player: 1 })
    } else {
      this.setState({ player: 2 })
    }
  }

  componentDidMount() {
    this.selectPlayer()
  }

  render() {
    return (
      <div className="wrapper">
        <div className="ttt-wrapper">
          {
            this.state.cells.map((e, key) => {
              return (
                <ul key={key} className="row-wrapper">
                  {
                    e.map((v, key2) => {
                      return <li key={key2} id={`${key}${key2}`} className={v} onClick={(e) => { this.handleClick(e.target.id) }}></li>
                    })
                  }
                </ul>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default TicTacToe
