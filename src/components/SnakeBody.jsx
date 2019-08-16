import React from "react";

export default props => {
  return (
    <div className="snake-body">
      {props.SnakeBodyCoordinates.map((dot, i) => {
        const dotPosition = {
          top: `${dot[1]}%`,
          left: `${dot[0]}%`
        };
        return <div className="dot" key={i} style={dotPosition} />;
      })}
    </div>
  );
};
