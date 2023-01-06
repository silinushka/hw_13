const string = prompt("Перший рядок");
const stringOne = prompt("Другий рядок");
const stringTwo = prompt("Третій рядок");

alert (string.concat(", ", stringOne, ", ", stringTwo));

const number = 12345;
const result = number.toString().split("");
alert (result.join(" "));