const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

let processedInput = input.replaceAll("Epinova", ">");
processedInput = processedInput.replaceAll("Egde", "<");
processedInput = processedInput.replaceAll("Novanet", "+");
processedInput = processedInput.replaceAll("Novacare", "-");
processedInput = processedInput.replaceAll("Dekode", ".");
processedInput = processedInput.replaceAll("NorthernBeat", ",");
processedInput = processedInput.replaceAll("PointTaken", "[");
processedInput = processedInput.replaceAll("Rocket", "]");

let output = processedInput.split("\n");
let lastLine = output.length - 1;
while (output[lastLine] === "") {
  lastLine--;
}
output = output[lastLine];

fs.writeFileSync(path.join(__dirname, "output.txt"), output);
