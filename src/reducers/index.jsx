// import { combineReducers } from "redux";
// import authReducer from "./authReducer";

// export default combineReducers({
//   auth: authReducer
// });

// export default moveSnake = () => {
//   let snakePulse = this.state.pulse;
//   let snakeDots = [...this.state.snakeBodyCoordinates];
//   let snakeHead = snakeDots[snakeDots.length - 1];
//   switch (this.state.direction) {
//     case "RIGHT":
//       snakeHead = [snakeHead[0] + snakePulse, snakeHead[1]];
//       break;
//     case "LEFT":
//       snakeHead = [snakeHead[0] - snakePulse, snakeHead[1]];
//       break;
//     case "UP":
//       snakeHead = [snakeHead[0], snakeHead[1] - snakePulse];
//       break;
//     case "DOWN":
//       snakeHead = [snakeHead[0], snakeHead[1] + snakePulse];
//       break;
//     default:
//       break;
//   }
//   snakeDots.push(snakeHead);
//   snakeDots.shift();
//   this.setState({
//     snakeBodyCoordinates: snakeDots
//   });
// };
