import React from "react";
import GoogleAuth from "./GoogleAuth";

const Header = props => {
  return (
    <div className="ui menu">
      <div className="header item">{props.title}</div>
      <div className="item">{props.score}</div>
      <div className="item">{props.prevHighScore}</div>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
