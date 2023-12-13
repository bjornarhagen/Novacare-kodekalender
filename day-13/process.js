const fs = require("fs");
const path = require("path");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

const rot13 = (originalString) => {
  let encodedString = "";
  for (let i = 0; i < originalString.length; i++) {
    const indexOfCharacter = alphabet.indexOf(originalString[i].toLowerCase());
    if (indexOfCharacter === -1) {
      // Handle non-alphabet characters (space/line-break/etc)
      encodedString += originalString[i];
    } else {
      const rot13Index = (indexOfCharacter + 13) % alphabet.length;
      encodedString += alphabet[rot13Index];
    }
  }
  return encodedString;
};

output = rot13(input);
fs.writeFileSync(path.join(__dirname, "output.txt"), output);
