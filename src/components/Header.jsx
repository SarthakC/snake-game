import React from "react";

const Header = props => {
  return (
    <div class="ui menu">
      <div class="header item">{props.title}</div>
      <div class="item">{props.score}</div>
      <div class="item">{props.prevHighScore}</div>
    </div>
  );
};

export default Header;
