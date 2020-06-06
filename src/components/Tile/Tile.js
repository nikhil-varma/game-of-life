import React from "react";
import "./Tile.css";

class Tile extends React.Component {
  render() {
    const { size = 20, left = 0, right = 0, top = 0, bottom = 0 } = this.props;
    return (
      <div
        className="tile"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: left,
          right: right,
          bottom: bottom,
          top: top,
        }}
      ></div>
    );
  }
}

export default Tile;
