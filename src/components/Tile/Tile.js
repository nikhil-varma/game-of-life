import React from "react";
import "./Tile.css";

class Tile extends React.Component {
  render() {
    const { width, height, left, right, top, bottom } = this.props;
    return (
      <div
        style={{
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
