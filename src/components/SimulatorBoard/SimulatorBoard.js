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
  componentDidMount() {
    this.spawnTiles(this.spawningFreq);
    this.runningInterval = setInterval(this.runSimulation, 1000);
  }

  spawningFreq = () =>
    (Math.floor(Math.random() * Math.floor(3)) > 1.9) % 7 ? 1 : 0;

  noSpawnCallback = () => 0;

  spawnTiles = (getSpawningValue = () => 0, updateState = true) => {
    const { grid } = this.state;
    let gridTiles = [];
    for (let i = 0; i < grid.rows; i++) {
      gridTiles[i] = [];
      for (let j = 0; j < grid.cols; j++) {
        gridTiles[i][j] = getSpawningValue();
      }
    }

    if (updateState) {
      this.setState(
        { grid: { gridTiles: gridTiles, rows: 30, cols: 30 } },
        this.runSimulation
      );
    } else {
      return gridTiles;
    }
  };

  getNeighbours = (gridTiles, x, y) => {
    const { grid } = this.state;
    const { rows, cols } = grid;
    let neighbors = 0;
    const neighborDirections = [
      [0, 1],
      [1, 0],
      [1, 1],
      [-1, -1],
      [-1, 0],
      [0, -1],
    ];
    for (let d = 0; d < neighborDirections.length; d++) {
      let newX = neighborDirections[d][0] + x;
      let newY = neighborDirections[d][1] + y;
      if (
        newX >= 0 &&
        newY >= 0 &&
        x < rows &&
        y < cols &&
        gridTiles[newX] &&
        gridTiles[newX][newY]
      ) {
        neighbors++;
      }
    }
    return neighbors;
  };

  runSimulation = () => {
    let nextFrame = this.spawnTiles(this.noSpawnCallback, false);
    const { grid } = this.state;
    const { rows, cols, gridTiles } = grid;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const neighbors = this.getNeighbours(gridTiles, i, j);
        if (gridTiles[i][j]) {
          if (neighbors === 2 || neighbors === 3) {
            nextFrame[i][j] = 1;
          } else {
            nextFrame[i][j] = 0;
          }
        } else {
          if (!gridTiles[i][j] && neighbors === 3) {
            nextFrame[i][j] = 1;
          }
        }
      }
    }
    this.setState({ grid: { rows: 30, cols: 30, gridTiles: nextFrame } });
  };

  render() {
    const { grid } = this.state;
    return (
      <div className="simulator-board">
        {grid.gridTiles.map((row, rowIndex) =>
          row.map((tile, colIndex) => {
            return tile ? (
              <Tile
                size={20}
                top={20 * rowIndex + 1}
                left={20 * colIndex + 1}
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
