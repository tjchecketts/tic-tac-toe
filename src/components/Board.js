import React from 'react'
import Square from './Square'

class Board extends React.Component {
  renderSquare = (i) => {
    return (
      <Square 
        value={ this.props.squares[i] }
        onClick={ () => this.props.onClick(i) }
      />
    )
  }

  render() {
    return (
      <div>
        <div className="status">
          {this.props.status}
        </div>
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