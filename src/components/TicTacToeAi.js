import React, { Component } from 'react'

class TicTacToeAi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cells: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      player: undefined,
      gameEnd: false,
      msg: "Tic Tac Toe Ai"
    }
  }

  winner(pos) {
    var newMsg
    if (this.state.cells[pos[0]][pos[1]] === 'o') {
      newMsg = "You won!"
    } else if (this.state.cells[pos[0]][pos[1]] === 'x') {
      newMsg = "Ai won!"
    }
    this.setState({
      gameEnd: true,
      msg: newMsg
    })
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
    } else {
      var freeCells = 0
      for (let i = 0; i < this.state.cells.length; i++) {
        for (let j = 0; j < this.state.cells.length; j++) {
          if (this.state.cells[i][j] === '') {
            freeCells++
          }
        }
      }
      if (freeCells === 0) {
        this.setState({
          gameEnd: true,
          msg: "It's a tie!"
        })
      }
    }
  }

  handleClick(pos) {
    if (!this.state.gameEnd && !this.state.gameEnd) {
      var newCells = this.state.cells
      if (this.state.player === 1) {
        if (newCells[pos[0]][pos[1]] === '') {
          newCells[pos[0]][pos[1]] = 'o'
          this.setState({
            cells: newCells,
            player: 2
          }, () => { this.AiPlayer(pos) })

        }
      }
      this.checkWinner(pos)
    }
  }


  // Ai Geting a possition
  GetAiPos(playerPos) {
    var notUsedCells = []
    var usedByPlayer = []
    var usedByAi = []
    var posToGo = undefined
    for (let i = 0; i < this.state.cells.length; i++) {
      for (let j = 0; j < this.state.cells.length; j++) {
        if (this.state.cells[i][j] === '') {
          var a = `${i}${j}`
          notUsedCells.push(a)
        } else if (this.state.cells[i][j] === 'o') {
          var a = `${i}${j}`
          usedByPlayer.push(a)
        } else if (this.state.cells[i][j] === 'x') {
          var a = `${i}${j}`
          usedByAi.push(a)
        }
      }
    }

    if (((usedByAi.includes("00") && usedByAi.includes("01"))) && notUsedCells.includes("02")) {
      posToGo = "02"
    }
    else if (((usedByAi.includes("00") && usedByAi.includes("02"))) && notUsedCells.includes("01")) {
      posToGo = "01"
    }
    else if (((usedByAi.includes("01") && usedByAi.includes("02"))) && notUsedCells.includes("00")) {
      posToGo = "00"
    }

    else if (((usedByAi.includes("10") && usedByAi.includes("11"))) && notUsedCells.includes("12")) {
      posToGo = "12"
    }
    else if (((usedByAi.includes("10") && usedByAi.includes("12"))) && notUsedCells.includes("01")) {
      posToGo = "01"
    }
    else if (((usedByAi.includes("11") && usedByAi.includes("12"))) && notUsedCells.includes("10")) {
      posToGo = "10"
    }

    else if (((usedByAi.includes("20") && usedByAi.includes("21"))) && notUsedCells.includes("22")) {
      posToGo = "22"
    }
    else if (((usedByAi.includes("20") && usedByAi.includes("22"))) && notUsedCells.includes("21")) {
      posToGo = "21"
    }
    else if (((usedByAi.includes("21") && usedByAi.includes("22"))) && notUsedCells.includes("20")) {
      posToGo = "20"
    }


    else if (((usedByAi.includes("00") && usedByAi.includes("10"))) && notUsedCells.includes("20")) {
      posToGo = "20"
    }
    else if (((usedByAi.includes("00") && usedByAi.includes("20"))) && notUsedCells.includes("10")) {
      posToGo = "10"
    }
    else if (((usedByAi.includes("10") && usedByAi.includes("20"))) && notUsedCells.includes("00")) {
      posToGo = "00"
    }

    else if (((usedByAi.includes("01") && usedByAi.includes("11"))) && notUsedCells.includes("21")) {
      posToGo = "21"
    }
    else if (((usedByAi.includes("01") && usedByAi.includes("21"))) && notUsedCells.includes("11")) {
      posToGo = "11"
    }
    else if (((usedByAi.includes("11") && usedByAi.includes("21"))) && notUsedCells.includes("01")) {
      posToGo = "01"
    }

    else if (((usedByAi.includes("02") && usedByAi.includes("12"))) && notUsedCells.includes("22")) {
      posToGo = "22"
    }
    else if (((usedByAi.includes("02") && usedByAi.includes("22"))) && notUsedCells.includes("12")) {
      posToGo = "12"
    }
    else if (((usedByAi.includes("12") && usedByAi.includes("22"))) && notUsedCells.includes("02")) {
      posToGo = "02"
    }
    // angular
    else if (((usedByAi.includes("00") && usedByAi.includes("11"))) && notUsedCells.includes("22")) {
      posToGo = "22"
    }
    else if (((usedByAi.includes("02") && usedByAi.includes("11"))) && notUsedCells.includes("20")) {
      posToGo = "20"
    }

    else if (((usedByAi.includes("20") && usedByAi.includes("11"))) && notUsedCells.includes("02")) {
      posToGo = "02"
    }
    else if (((usedByAi.includes("22") && usedByAi.includes("11"))) && notUsedCells.includes("00")) {
      posToGo = "00"
    }

    else if (((usedByAi.includes("00") && usedByAi.includes("22")) || (usedByAi.includes("02") && usedByAi.includes("20"))) && notUsedCells.includes("11")) {
      posToGo = "11"
    }

    // for player
    else if (((usedByPlayer.includes("00") && usedByPlayer.includes("01"))) && notUsedCells.includes("02")) {
      posToGo = "02"
    }
    else if (((usedByPlayer.includes("00") && usedByPlayer.includes("02"))) && notUsedCells.includes("01")) {
      posToGo = "01"
    }
    else if (((usedByPlayer.includes("01") && usedByPlayer.includes("02"))) && notUsedCells.includes("00")) {
      posToGo = "00"
    }

    else if (((usedByPlayer.includes("10") && usedByPlayer.includes("11"))) && notUsedCells.includes("12")) {
      posToGo = "12"
    }
    else if (((usedByPlayer.includes("10") && usedByPlayer.includes("12"))) && notUsedCells.includes("01")) {
      posToGo = "01"
    }
    else if (((usedByPlayer.includes("11") && usedByPlayer.includes("12"))) && notUsedCells.includes("10")) {
      posToGo = "10"
    }

    else if (((usedByPlayer.includes("20") && usedByPlayer.includes("21"))) && notUsedCells.includes("22")) {
      posToGo = "22"
    }
    else if (((usedByPlayer.includes("20") && usedByPlayer.includes("22"))) && notUsedCells.includes("21")) {
      posToGo = "21"
    }
    else if (((usedByPlayer.includes("21") && usedByPlayer.includes("22"))) && notUsedCells.includes("20")) {
      posToGo = "20"
    }


    else if (((usedByPlayer.includes("00") && usedByPlayer.includes("10"))) && notUsedCells.includes("20")) {
      posToGo = "20"
    }
    else if (((usedByPlayer.includes("00") && usedByPlayer.includes("20"))) && notUsedCells.includes("10")) {
      posToGo = "10"
    }
    else if (((usedByPlayer.includes("10") && usedByPlayer.includes("20"))) && notUsedCells.includes("00")) {
      posToGo = "00"
    }

    else if (((usedByPlayer.includes("01") && usedByPlayer.includes("11"))) && notUsedCells.includes("21")) {
      posToGo = "21"
    }
    else if (((usedByPlayer.includes("01") && usedByPlayer.includes("21"))) && notUsedCells.includes("11")) {
      posToGo = "11"
    }
    else if (((usedByPlayer.includes("11") && usedByPlayer.includes("21"))) && notUsedCells.includes("01")) {
      posToGo = "01"
    }

    else if (((usedByPlayer.includes("02") && usedByPlayer.includes("12"))) && notUsedCells.includes("22")) {
      posToGo = "22"
    }
    else if (((usedByPlayer.includes("02") && usedByPlayer.includes("22"))) && notUsedCells.includes("12")) {
      posToGo = "12"
    }
    else if (((usedByPlayer.includes("12") && usedByPlayer.includes("22"))) && notUsedCells.includes("02")) {
      posToGo = "02"
    }

    // rows
    else if ((usedByPlayer.includes("00") && usedByPlayer.includes("02")) && notUsedCells.includes("01")) {
      posToGo = "01"
    }
    else if ((usedByPlayer.includes("10") && usedByPlayer.includes("12")) && notUsedCells.includes("11")) {
      posToGo = "11"
    }
    else if ((usedByPlayer.includes("20") && usedByPlayer.includes("22")) && notUsedCells.includes("21")) {
      posToGo = "21"
    }

    // colls
    else if ((usedByPlayer.includes("00") && usedByPlayer.includes("20")) && notUsedCells.includes("10")) {
      posToGo = "10"
    }
    else if ((usedByPlayer.includes("01") && usedByPlayer.includes("21")) && notUsedCells.includes("11")) {
      posToGo = "11"
    }
    else if ((usedByPlayer.includes("02") && usedByPlayer.includes("22")) && notUsedCells.includes("12")) {
      posToGo = "12"
    }

    // Angular
    else if (((usedByPlayer.includes("00") && usedByPlayer.includes("22")) || (usedByPlayer.includes("02") && usedByPlayer.includes("20"))) && notUsedCells.includes("11")) {
      posToGo = "11"
    }

    else if ((playerPos === "11" || playerPos === "00" || playerPos === "02" || playerPos === "20" || playerPos === "22" || playerPos === "01" || playerPos === "10" || playerPos === "12" || playerPos === "21")) {
      if (notUsedCells.includes('11')) {
        posToGo = "11"
      } else {
        if (playerPos === "11") {
          if (notUsedCells.includes("12")) { posToGo = "12" }
          else if (notUsedCells.includes("21")) { posToGo = "21" }
          else if (notUsedCells.includes("10")) { posToGo = "10" }
          else if (notUsedCells.includes("01")) { posToGo = "01" }
          else {
            posToGo = notUsedCells[0]
          }
        }
        else if (playerPos === "01") {
          if (notUsedCells.includes("00")) { posToGo = "00" }
          else if (notUsedCells.includes("02")) { posToGo = "02" }
          else {
            posToGo = notUsedCells[0]
          }
        }
        else if (playerPos === "12") {
          if (notUsedCells.includes("02")) { posToGo = "02" }
          else if (notUsedCells.includes("22")) { posToGo = "22" }
          else {
            posToGo = notUsedCells[0]
          }
        }
        else if (playerPos === "21") {
          if (notUsedCells.includes("20")) { posToGo = "20" }
          else if (notUsedCells.includes("22")) { posToGo = "22" }
          else {
            posToGo = notUsedCells[0]
          }
        }
        else if (playerPos === "10") {
          if (notUsedCells.includes("00")) { posToGo = "00" }
          else if (notUsedCells.includes("20")) { posToGo = "20" }
          else {
            posToGo = notUsedCells[0]
          }
        }
        else if (playerPos === "00" && notUsedCells.includes("20")) { posToGo = "22" }
        else if (playerPos === "02" && notUsedCells.includes("20")) { posToGo = "20" }
        else if (playerPos === "20" && notUsedCells.includes("02")) { posToGo = "02" }
        else if (playerPos === "22" && notUsedCells.includes("00")) { posToGo = "00" }
        else {
          posToGo = notUsedCells[0]
        }
      }
    } else {
      console.log(notUsedCells)
      posToGo = notUsedCells[0]
    }
    console.log(posToGo)
    return posToGo
  }

  // Ai Player
  AiPlayer(playerPos) {
    if (!this.state.gameEnd && !this.state.gameEnd) {
      var newCells = this.state.cells
      var pos
      if (!playerPos) {
        pos = "11"
      } else {
        pos = this.GetAiPos(playerPos)
      }

      if (this.state.player === 2) {
        if (newCells[pos[0]][pos[1]] === '') {
          newCells[pos[0]][pos[1]] = 'x'
          this.setState({
            cells: newCells,
            player: 1
          })
        }
      }
    }
    this.checkWinner(pos)
  }

  selectPlayer() {
    this.setState({
      cells: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      player: undefined,
      gameEnd: false,
      gameEnd: false,
      msg: "Tic Tac Toe Ai"
    }, () => {
      if (Math.random() < 0.5) {
        this.setState({ player: 1 })
      } else {
        this.setState({ player: 2 }, () => { this.AiPlayer(undefined) })
      }
    })
  }

  componentDidMount() {
    this.selectPlayer()
  }

  render() {
    return (
      <div className="wrapper">
        <h1>{this.state.msg}</h1>
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
        <button className="btn" onClick={() => { this.selectPlayer() }}>Play Again</button>
      </div>
    )
  }
}

export default TicTacToeAi
