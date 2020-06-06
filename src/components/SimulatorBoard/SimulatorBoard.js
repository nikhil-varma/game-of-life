import React from "react";
import Tile from "../Tile/Tile";
import "./SimulatorBoard.css";

class SimulatorBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: {
        rows: 30,
        cols: 30,
        gridTiles: [],
      },
    };
  }

  generateTilesPlaceholders = () => {
    const { grid } = this.state;
    let board = [];
    for (let i = 0; i < grid.rows; i++) {
      board[i] = [];
      for (let j = 0; j < grid.cols; j++) {
        board[i][j] = Math.floor(Math.random() * Math.floor(2)) % 2 ? 1 : 0;
      }
    }
    return board;
  };

  render() {
    return (
      <div className="simulator-board">
        {this.generateTilesPlaceholders().map((row, rowIndex) =>
          row.map((tile, colIndex) => {
            console.log(tile);
            return tile ? (
              <Tile
                size={20}
                left={20 * rowIndex + 1}
                top={20 * colIndex + 1}
                key={`${colIndex}${rowIndex}`}
              />
            ) : null;
          })
        )}
      </div>
    );
  }
}

export default SimulatorBoard;
