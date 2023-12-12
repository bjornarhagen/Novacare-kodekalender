const fs = require("fs");
const path = require("path");

function AND(a, b) {
  return a && b;
}

function OR(a, b) {
  return a || b;
}

function XOR(a, b) {
  return a !== b;
}

function NOT(a) {
  return !a;
}

function arrayOfBooleanToBinary(array) {
  return array.map((item) => (item ? 1 : 0)).join("");
}

const binarySolution = arrayOfBooleanToBinary([
  NOT(OR(false, true)),
  OR(false, true),
  AND(false, false),
  NOT(AND(false, false)),
  NOT(XOR(AND(false, false), OR(false, false))),
  XOR(AND(false, false), OR(false, false)),
  XOR(false, true),
  XOR(XOR(false, true), XOR(false, true)),
]);

fs.writeFileSync(path.join(__dirname, "output.txt"), binarySolution);
