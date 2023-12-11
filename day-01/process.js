const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

let processedInput = input.replaceAll("🐘", "e");
processedInput = processedInput.replaceAll("🦓", "a");
processedInput = processedInput.replaceAll("🐖", "o");
processedInput = processedInput.replaceAll("🐭", "y");
processedInput = processedInput.replaceAll("🦔", "j");
processedInput = processedInput.replaceAll("🦄", "v");
processedInput = processedInput.replaceAll("🐌", "s");
processedInput = processedInput.replaceAll("🐴", "r");
processedInput = processedInput.replaceAll("🐵", "p");
processedInput = processedInput.replaceAll("🐐", "k");
processedInput = processedInput.replaceAll("🦏", "n");
processedInput = processedInput.replaceAll("🦜", "i");
processedInput = processedInput.replaceAll("🐫", "d");

let output = processedInput.split("\n");
let lastLine = output.length - 1;
while (output[lastLine] === "") {
  lastLine--;
}
output = output[lastLine];

fs.writeFileSync(path.join(__dirname, "output.txt"), output);
