import React from "react";

export default props => {
  const style = {
    left: `${props.coordinates[0]}%`,
    top: `${props.coordinates[1]}%`
  };

  return <div className="dot red-bg" style={style} />;
};
