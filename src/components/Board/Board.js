import React from 'react';
import PropTypes from 'prop-types';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {board: [...Array(3)].map(() => Array(3).fill(''))};
  }

  cellClicked(rowIndex, cellIndex) {
    const board = [...this.state.board];
    board[rowIndex][cellIndex] = 'X';
    if (board[0].every(x => x === 'X')) {
      this.props.onGameOver();
    }
    this.setState({board});
  }

  render() {
    return (<table>
      <tbody>
        {this.state.board.map((row, rowIndex) =>
          <tr key={rowIndex}>{row.map((cell, cellIndex) =>
            <td
              data-hook="cell"
              key={cellIndex}
              onClick={() => this.cellClicked(rowIndex, cellIndex)}
              >{cell}</td>)}
          </tr>
        )}
      </tbody>
    </table>);
  }
}

Board.propTypes = {
  onGameOver: PropTypes.func.isRequired
};

export default Board;
