import randomIntFromInterval from "./randomIntFromInterval";

const getRandomCoordinates = (max, min) => {
  const x = randomIntFromInterval(max / 2, min / 2) * 2;
  const y = randomIntFromInterval(max / 2, min / 2) * 2;
  return [x, y];
};

export default getRandomCoordinates;
