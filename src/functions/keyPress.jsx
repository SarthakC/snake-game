const keyPress = function(e) {
  e = e || window.event;
  switch (e.keyCode) {
    case 38:
      this.setState({ direction: "UP" });
    case 40:
      this.setState({ direction: "DOWN" });
    case 37:
      this.setState({ direction: "LEFT" });
    case 39:
      this.setState({ direction: "RIGHT" });
    default:
  }
};

export default keyPress;
