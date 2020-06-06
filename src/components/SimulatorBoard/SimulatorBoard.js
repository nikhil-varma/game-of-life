import React from "react";
import { Tile } from "../Tile";
import "./SimulatorBoard.css";

class SimulatorBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: {
        rows: 10,
        cols: 10,
        gridTiles: [],
      },
    };
  }

  generateTiles = () => {
    let board = [];
    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = <Tile />;
      }
    }
    return board;
  };

  render() {
    const Tile_SIZE = 20;
    return <div className="simulator-board"></div>;
  }
}

export default SimulatorBoard;
