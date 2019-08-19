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

// import React, { Component } from "react";
// import { connect } from "react-redux";

// class SnakeBody extends Component {
//   renderSnake() {
//     this.props.SnakeBodyCoordinates.map((dot, i) => {
//       const dotPosition = {
//         top: `${dot[1]}%`,
//         left: `${dot[0]}%`
//       };
//       return <div className="dot" key={i} style={dotPosition} />;
//     });
//   }
//   render() {
//     return <div>{this.renderSnake}</div>;
//   }
// }
// const mapStateToProps = state => {
//   console.log(state);
//   return state;
// };
// export default connect(mapStateToProps)(SnakeBody);
