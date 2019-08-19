import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const moveSnake = snakeHead => {
  return {
    type: "MOVE_SNAKE",
    payload: snakeHead
  };
};