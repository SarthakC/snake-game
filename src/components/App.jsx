import React, { Component } from "react";
import "../css/styles.css";
import SnakeBody from "./SnakeBody";
import Target from "./Target";
import getRandomCoordinates from "../functions/getRandomCoordinates";
import Header from "./Header";

// new imports
import { moveSnake } from "../actions/index";

const initialState = {
  direction: null,
  speed: 200,
  targetCoordinates: getRandomCoordinates(0, 98),
  snakeBodyCoordinates: [[0, 0], [2, 0], [4, 0]],
  show: { display: "block" },
  hidden: { display: "none" },
  pulse: 2
};
export default class App extends Component {
  state = { ...initialState, ...{ prevHighScore: 0 } };

  componentDidMount() {
    document.onkeydown = this.keyPress;
    setInterval(this.moveSnake, this.state.speed);
  }

  componentDidUpdate() {
    this.checkBorderCollision();
    this.checkSelfCollision();
    this.checkHitTarget();
  }
  keyPress = e => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({ direction: "UP" });
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        break;
      case 37:
        this.setState({ direction: "LEFT" });
        break;
      case 39:
        this.setState({ direction: "RIGHT" });
        break;
      default:
        break;
    }
  };

  moveSnake = () => {
    let snakePulse = this.state.pulse;
    let snakeDots = [...this.state.snakeBodyCoordinates];
    let snakeHead = snakeDots[snakeDots.length - 1];
    switch (this.state.direction) {
      case "RIGHT":
        snakeHead = [snakeHead[0] + snakePulse, snakeHead[1]];
        break;
      case "LEFT":
        snakeHead = [snakeHead[0] - snakePulse, snakeHead[1]];
        break;
      case "UP":
        snakeHead = [snakeHead[0], snakeHead[1] - snakePulse];
        break;
      case "DOWN":
        snakeHead = [snakeHead[0], snakeHead[1] + snakePulse];
        break;
      default:
        break;
    }
    snakeDots.push(snakeHead);
    snakeDots.shift();
    this.setState({
      snakeBodyCoordinates: snakeDots
    });
  };

  checkBorderCollision() {
    let snakeHead = this.state.snakeBodyCoordinates[
      this.state.snakeBodyCoordinates.length - 1
    ];
    if (
      snakeHead[0] >= 100 ||
      snakeHead[1] >= 100 ||
      snakeHead[0] < 0 ||
      snakeHead[1] < 0
    ) {
      this.endGame();
    }
  }

  checkSelfCollision() {
    let snakeBody = [...this.state.snakeBodyCoordinates];
    let snakeHead = snakeBody[snakeBody.length - 1];
    snakeBody.pop();
    snakeBody.forEach(dot => {
      if (snakeHead[0] === dot[0] && snakeHead[1] == dot[1]) {
        this.endGame();
      }
    });
  }

  checkHitTarget() {
    let snakeHead = this.state.snakeBodyCoordinates[
      this.state.snakeBodyCoordinates.length - 1
    ];
    let target = this.state.targetCoordinates;
    if (snakeHead[0] === target[0] && snakeHead[1] === target[1]) {
      let randomCoordinates = getRandomCoordinates(0, 98);
      this.setState({ targetCoordinates: randomCoordinates });
      this.snakeLengthIncrease();
    }
  }

  snakeLengthIncrease() {
    let updatedSnakeBody = [...this.state.snakeBodyCoordinates];
    updatedSnakeBody.unshift([]);
    this.setState({ snakeBodyCoordinates: updatedSnakeBody });
  }

  endGame() {
    let highScore = this.state.prevHighScore;
    let currentScore = this.state.snakeBodyCoordinates.length - 3;
    if (currentScore > highScore) {
      highScore = currentScore;
    } else {
      highScore = this.state.prevHighScore;
    }
    let newState = { ...initialState, ...{ prevHighScore: highScore } };
    this.setState(newState);
  }

  render() {
    return (
      <div className="centered ui">
        <Header
          title={"Snake Game Using React"}
          score={`Your Score is: ${this.state.snakeBodyCoordinates.length - 3}`}
          prevHighScore={`Current High Score is: ${this.state.prevHighScore}`}
        />
        <div className="ui equal width grid">
          <div className="centered row">
            <div className="arena" style={this.state.show}>
              <SnakeBody
                SnakeBodyCoordinates={this.state.snakeBodyCoordinates}
              />
              <Target coordinates={this.state.targetCoordinates} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
