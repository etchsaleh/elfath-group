import React from "react";
import "../styles/App.css";
export default function Tile(props) {
  return (
    <>
      <div className="flip-container tile-container">
        <div className="tile">
          <div className="front">
            <h3 className="tile-style">Learn more</h3>
          </div>
          <div className="back" style={{ backgroundColor: `${props.color}` }}>
            <h3>{props.area}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
