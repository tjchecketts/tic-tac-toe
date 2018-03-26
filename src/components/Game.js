import React from 'react'
import Board from './Board'

const winLogic = (squares) => {
  const lines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

class Game extends React.Component {
  state = { 
    history: [{
      squares: [Array(9).fill(null)],
    }],
    xIsNext: true,
  }

  handleClick = (i) => {
    const history = this.state.history
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (winLogic(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? "X" : "O"
    this.setState({ 
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
    })
  }

  render() {
    const history = this.state.history
    const current = history[history.length - 1]
    const winner = winLogic(current.squares)

    let status
    if (winner) {
      status = `Winner: ${winner}`
    } else {
      status = `Next player: ${ this.state.xIsNext ? "X" : "O" }`
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={ current.squares }
            onClick={ (i) => this.handleClick(i) }
            status={status}
          />
        </div>
        <div className="game-info">
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

export default Game