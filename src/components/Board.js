import React from 'react'
import Square from './Square'

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

class Board extends React.Component {
  state = { 
    squares: [Array(9).fill(null)],
    xIsNext: true,
  }

  handleClick = (i) => {
    const squares = this.state.squares.slice()
    if (winLogic(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? "X" : "O"
    this.setState({ 
      squares: squares,
      xIsNext: !this.state.xIsNext,
    })
  }

  renderSquare = (i) => {
    return (
      <Square 
        value={this.state.squares[i]}
        onClick={ () => this.handleClick(i)}
      />
    )
  }

  render() {
    const winner = winLogic(this.state.squares)
    let status
    if (winner) {
      status = `Winner: ${winner}`
    } else {
      status = `Next player: ${ this.state.xIsNext ? "X" : "O" }`
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </div>
    )
  }
}

export default Board