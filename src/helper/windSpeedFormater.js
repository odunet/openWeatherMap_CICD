export default function windSpeedFormater(rawSpeed, rawDirection) {
  // Convert wind direction to useful format
  let direction = parseFloat(rawDirection);
  let switchResult;

  if (direction && direction > 348.75) {
    switchResult = 'N';
  } else if (11.25 >= direction && direction > 0) {
    switchResult = 'N';
  } else if (33.75 >= direction && direction > 11.25) {
    switchResult = 'NNE';
  } else if (56.25 >= direction && direction > 33.75) {
    switchResult = 'NE';
  } else if (78.75 >= direction && direction > 56.25) {
    switchResult = 'ENE';
  } else if (101.25 >= direction && direction > 78.75) {
    switchResult = 'E';
  } else if (123.75 >= direction && direction > 101.25) {
    switchResult = 'ESE';
  } else if (146.25 >= direction && direction > 123.75) {
    switchResult = 'SE';
  } else if (168.75 >= direction && direction > 146.25) {
    switchResult = 'SSE';
  } else if (191.25 >= direction && direction > 168.75) {
    switchResult = 'S';
  } else if (213.75 >= direction && direction > 191.25) {
    switchResult = 'SSW';
  } else if (236.25 >= direction && direction > 213.75) {
    switchResult = 'SW';
  } else if (258.75 >= direction && direction > 236.25) {
    switchResult = 'WSW';
  } else if (281.25 >= direction && direction > 258.75) {
    switchResult = 'W';
  } else if (303.75 >= direction && direction > 281.25) {
    switchResult = 'WNW';
  } else if (326.25 >= direction && direction > 303.75) {
    switchResult = 'NW';
  } else if (348.75 >= direction && direction > 326.25) {
    switchResult = 'NNW';
  } else {
    switchResult = '';
  }

  // convert default speed in M/S to KM/H
  let speed = parseFloat(rawSpeed) * 3.6;

  // Return required combination
  return `${switchResult} ${speed.toFixed(2)}Km/h`;
}
